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
}
interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext({} as TransactionContextData)

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetch("http://localhost:3333/transactions")
      .then(response => response.json())
      .then(response => setTransactions(response))
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  )
}