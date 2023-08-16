import * as S from './styles'

export function TransactionsTable() {
  return (
    <S.Container className="container">
      <S.Table>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <S.PriceHighLight variant="outcome">-R$ 12.000</S.PriceHighLight>
            </td>
            <td>venda</td>
            <td>13/04/2023</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <S.PriceHighLight variant="income">R$ 12.000</S.PriceHighLight>
            </td>
            <td>venda</td>
            <td>13/04/2023</td>
          </tr>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <S.PriceHighLight variant="income">R$ 12.000</S.PriceHighLight>
            </td>
            <td>venda</td>
            <td>13/04/2023</td>
          </tr>
        </tbody>
      </S.Table>
    </S.Container>
  )
}
