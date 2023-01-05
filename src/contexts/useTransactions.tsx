import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/axios";

interface Transaction {
  id: number;
  description: string;
  price: number;
  category: string;
  created_at: string;
  type: "income" | "outcome";
}

interface TransactionsContextData {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}

const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", { params: { q: query } });
    setTransactions(response.data);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionsContext);
