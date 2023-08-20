import { ReactNode, createContext, useEffect, useState } from 'react'

import transactionsService from '@/services/transactions-service'

import { ITransaction } from '@/types/transaction'

interface ITransactionsContextData {
  transactions: ITransaction[]
}

export const TransactionsContext = createContext({} as ITransactionsContextData)

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  async function getAllTransactions() {
    try {
      const contactsList = await transactionsService.listAll()

      setTransactions(contactsList)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
