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
}

interface TransactionProviderProps {
  children: ReactNode;
}

const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get("http://localhost:3333/transactions");
      setTransactions(response.data);
    }
    getTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export const useTransactions = () => useContext(TransactionsContext);
