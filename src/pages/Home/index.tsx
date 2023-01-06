import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/useTransactions'
import { dateFormatted, priceFormatted } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  PriceHightLight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export function Home() {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

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
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatted.format(transaction.price)}
                  </PriceHightLight>
                </td>
                <td>{transaction.category}</td>
                <td>
                  {dateFormatted.format(new Date(transaction.created_at))}
                </td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
