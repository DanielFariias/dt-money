import { useEffect, useState } from 'react'

import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { TransactionsTable } from '../../components/transactions-table'
import transactionsService from '../../services/transactions-service'

import * as S from './styles'
import { ITransaction } from '../../@types/transaction'

export function Home() {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function getAllTransactions() {
    try {
      const contactsList = await transactionsService.listAll()

      setTransactions(contactsList)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllTransactions()
  }, [])

  return (
    <S.Container>
      <Header />
      <Summary />

      <TransactionsTable transactions={transactions} />
    </S.Container>
  )
}
