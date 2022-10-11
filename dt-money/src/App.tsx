import { ThemeProvider } from 'styled-components'
import { TransactionProvider } from './contexts/Transaction'
import { Transactions } from './pages/Transactions'
import { GlobalStyles } from './styles/global/GlobalStyles'
import { defaultTheme } from './styles/theme/defaul'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}
