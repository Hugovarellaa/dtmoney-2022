import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/axios";

interface Transaction {
  id: number,
  description: string
  type: "income" | "outcome",
  category: string,
  price: number,
  createdAt: string
}

interface TransactionContextData {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}
interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query
      }
    })
    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionContext.Provider>
  )
}