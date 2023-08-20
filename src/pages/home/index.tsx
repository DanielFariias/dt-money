import { useEffect, useState } from 'react'

import { TransactionsTable } from '@/components/transactions-table'
import { Summary } from '@/components/summary'
import { Header } from '@/components/header'

import transactionsService from '@/services/transactions-service'

import { ITransaction } from '@/types/transaction'

import * as S from './styles'

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
