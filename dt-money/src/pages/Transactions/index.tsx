import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { useTransaction } from "../../hooks/useTransaction";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionTable } from "./styles";



export function Transactions() {
  const { transactions } = useTransaction()

  return (
    <div>

      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>

            {
              transactions.map(transaction => {
                return (
                  <tr key={transaction.id}>
                    <td>{transaction.description}</td>
                    <td>
                      <PriceHighLight variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighLight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                  </tr>
                );
              })
            }

          </tbody>
        </TransactionTable>
      </TransactionsContainer>
    </div>

  )
} 