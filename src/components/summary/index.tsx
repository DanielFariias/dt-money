import { useTheme } from 'styled-components'

import { useSummary } from '@/hooks/use-summary'

import { currencyFormatter } from '@/utils/formmater'

import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from 'phosphor-react'

import * as S from './styles'

export function Summary() {
  const theme = useTheme()

  const summary = useSummary()

  return (
    <S.Container className="container">
      <S.Card>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>
        <strong>{currencyFormatter.format(summary.income)}</strong>
      </S.Card>

      <S.Card>
        <header>
          <p>Saidas</p>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        <strong>{currencyFormatter.format(summary.outcome)}</strong>
      </S.Card>

      <S.Card variant="green">
        <header>
          <p>Total</p>
          <CurrencyCircleDollar size={32} />
        </header>
        <strong>{currencyFormatter.format(summary.total)}</strong>
      </S.Card>
    </S.Container>
  )
}
