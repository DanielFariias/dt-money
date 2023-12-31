import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'
import { GlobalStyles } from '../../styles/global'
import { Home } from '../../pages/home'
import { TransactionsProvider } from '@/contexts/transactions-context'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <TransactionsProvider>
        <Home />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
