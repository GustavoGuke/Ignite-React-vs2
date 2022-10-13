import { Button } from "./components/Button/Button";
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from "./themes/styles/default";
export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button color='primary'/>
      <Button color='secondary'/>
      <Button color='danger'/>
      <Button color='sucess'/>
      <Button/>
    </ThemeProvider>
  )
}


