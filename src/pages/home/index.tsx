import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { TransactionsTable } from '../../components/transactions-table'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Header />
      <Summary />

      <TransactionsTable />
    </S.Container>
  )
}
