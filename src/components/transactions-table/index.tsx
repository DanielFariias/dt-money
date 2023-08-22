import { ITransaction } from '@/types/transaction'

import { SearchForm } from '../search-form'

import * as S from './styles'
import { currencyFormatter, dataFormatter } from '@/utils/formmater'
import { Table } from 'phosphor-react'

interface ITransactionsTableProps {
  transactions: ITransaction[]
}

export function TransactionsTable({ transactions }: ITransactionsTableProps) {
  return (
    <S.Container className="container">
      <SearchForm />
      <S.Table>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td width="50%">{transaction.description}</td>
              <td>
                <S.PriceHighLight variant={transaction.type}>
                  {transaction.type === 'outcome' && '- '}
                  {currencyFormatter.format(transaction.price)}
                </S.PriceHighLight>
              </td>
              <td>{transaction.category}</td>
              <td>{dataFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </S.Table>

      {transactions.length === 0 && (
        <S.EmptyTransactions>
          <h2>Nenhuma transação encontrada</h2>
          <p>
            Clique em <span>nova transação</span> para começar a controlar seus
            gastos
          </p>
          <Table size={72} />
        </S.EmptyTransactions>
      )}
    </S.Container>
  )
}
