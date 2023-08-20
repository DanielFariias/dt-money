import { ReactNode, createContext, useEffect, useState } from 'react'

import transactionsService from '@/services/transactions-service'

import { ITransaction } from '@/types/transaction'

interface ITransactionsContextData {
  transactions: ITransaction[]
  onGetTransactions: (query: string) => Promise<void>
}

export const TransactionsContext = createContext({} as ITransactionsContextData)

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function getTransactions(query: string = '') {
    try {
      const contactsList = await transactionsService.getByQuery(query)

      setTransactions(contactsList)
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
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
