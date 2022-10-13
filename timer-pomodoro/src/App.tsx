import { Button } from './components/Button/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './themes/styles/default'
import { GlobalStyle } from './themes/styles/Global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button color="primary" />
      <Button color="secondary" />
      <Button color="danger" />
      <Button color="sucess" />
      <Button />
    </ThemeProvider>
  )
}
