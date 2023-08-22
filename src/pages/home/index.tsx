import { TransactionsContext } from '@/contexts/transactions-context'

import { TransactionsTable } from '@/components/transactions-table'
import { Summary } from '@/components/summary'
import { Header } from '@/components/header'

import * as S from './styles'
import { useContextSelector } from 'use-context-selector'

export function Home() {
  const transactions = useContextSelector(TransactionsContext, (ctx) => {
    return ctx.transactions
  })

  return (
    <S.Container>
      <Header />
      <Summary />

      <TransactionsTable transactions={transactions} />
    </S.Container>
  )
}
