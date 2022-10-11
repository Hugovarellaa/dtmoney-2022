import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionTable } from "./styles";

interface Transaction {
  id: number,
  description: string
  type: "income" | "outcome",
  category: string,
  price: number,
  createdAt: string
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    fetch("http://localhost:3333/transactions")
      .then(response => response.json())
      .then(response => setTransactions(response))
  }, [])

  return (
    <div>

      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>

            {
              transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      R$ {transaction.price}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              ))
            }

          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>

  )
} 