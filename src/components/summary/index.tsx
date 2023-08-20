import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from 'phosphor-react'
import * as S from './styles'
import { useTheme } from 'styled-components'
import { TransactionsContext } from '@/contexts/transactions-context'
import { useContext } from 'react'

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  const theme = useTheme()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  console.log(summary)

  return (
    <S.Container className="container">
      <S.Card>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>
        <strong>{summary.income}</strong>
      </S.Card>

      <S.Card>
        <header>
          <p>Saidas</p>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        <strong>{summary.outcome}</strong>
      </S.Card>

      <S.Card variant="green">
        <header>
          <p>Total</p>
          <CurrencyCircleDollar size={32} />
        </header>
        <strong>{summary.total}</strong>
      </S.Card>
    </S.Container>
  )
}
