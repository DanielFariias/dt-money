import { ReactNode, createContext, useEffect, useState } from 'react'

import transactionsService from '@/services/transactions-service'

import { ITransaction } from '@/types/transaction'

interface INewTransaction {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface ITransactionsContextData {
  transactions: ITransaction[]
  onGetTransactions: (query: string) => Promise<void>
  onCreateTransaction: (data: INewTransaction) => Promise<void>
}

export const TransactionsContext = createContext({} as ITransactionsContextData)

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function getTransactions(query: string = '') {
    try {
      const params = {
        _sort: 'createdAt',
        _order: 'desc',
      }

      const contactsList = await transactionsService.getByQuery(query, params)

      setTransactions(contactsList)
    } catch (error) {
      console.log(error)
    }
  }

  async function createTransaction(data: INewTransaction) {
    try {
      const newTransaction = await transactionsService.create({
        ...data,
        createdAt: new Date(),
      })

      setTransactions((prevState) => [newTransaction, ...prevState])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        onGetTransactions: getTransactions,
        onCreateTransaction: createTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
