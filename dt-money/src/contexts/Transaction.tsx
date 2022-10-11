import { createContext, ReactNode, useEffect, useState } from "react";

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
    const url = new URL("http://localhost:3333/transactions")

    if(query){
      url.searchParams.append('q', query)
    }

    fetch(url)
      .then(response => response.json())
      .then(response => setTransactions(response))
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