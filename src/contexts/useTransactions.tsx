import { ReactNode, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../services/axios'

interface Transaction {
  id: number
  description: string
  price: number
  category: string
  created_at: string
  type: 'income' | 'outcome'
}

type createTransaction = Omit<Transaction, 'id' | 'created_at'>

interface TransactionsContextData {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: createTransaction) => Promise<void>
}

interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'created_at',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }

  async function createTransaction(data: createTransaction) {
    const { description, price, category, type } = data

    const response = await api.post('/transactions', {
      description,
      price,
      category,
      type,
      created_at: new Date(),
    })

    setTransactions((oldState) => [response.data, ...oldState])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

// export const useTransactions = () => useContextSelector(TransactionsContext)
