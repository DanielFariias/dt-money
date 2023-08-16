import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyCircleDollar,
} from 'phosphor-react'
import * as S from './styles'
import { useTheme } from 'styled-components'

export function Summary() {
  const theme = useTheme()
  return (
    <S.Container className="container">
      <S.Card>
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={32} color={theme['green-300']} />
        </header>
        <strong>R$ 1000,00</strong>
      </S.Card>

      <S.Card>
        <header>
          <p>Saidas</p>
          <ArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        <strong>R$ 1000,00</strong>
      </S.Card>

      <S.Card variant="green">
        <header>
          <p>Total</p>
          <CurrencyCircleDollar size={32} />
        </header>
        <strong>R$ 1000,00</strong>
      </S.Card>
    </S.Container>
  )
}
