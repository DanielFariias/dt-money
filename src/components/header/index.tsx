import * as S from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <S.Wrapper>
      <S.Content className="container">
        <img src={logoImg} alt="" />

        <S.NewTransactionButton>Nova transação</S.NewTransactionButton>
      </S.Content>
    </S.Wrapper>
  )
}
