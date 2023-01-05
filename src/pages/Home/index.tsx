import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { api } from "../../services/axios";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHightLight,
  TransactionContainer,
  TransactionTable,
} from "./styles";

interface Transaction {
  id: number;
  description: string;
  price: number;
  category: string;
  created_at: string;
  type: "income" | "outcome";
}

export function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get("http://localhost:3333/transactions");
      setTransactions(response.data);
    }
    getTransactions();
  }, []);
  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHightLight variant={transaction.type}>
                    R$ {transaction.price}
                  </PriceHightLight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.created_at.toString()}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  );
}
