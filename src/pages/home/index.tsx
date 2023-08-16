import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Header />
      <Summary />
    </S.Container>
  )
}
