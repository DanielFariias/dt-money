import { useContext } from 'react'

import { TransactionsContext } from '@/contexts/transactions-context'

import { TransactionsTable } from '@/components/transactions-table'
import { Summary } from '@/components/summary'
import { Header } from '@/components/header'

import * as S from './styles'

export function Home() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <S.Container>
      <Header />
      <Summary />

      <TransactionsTable transactions={transactions} />
    </S.Container>
  )
}
