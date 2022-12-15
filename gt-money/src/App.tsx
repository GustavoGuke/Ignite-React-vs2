import { ThemeProvider } from "styled-components";
import { Globalstyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Globalstyle/>
      <div>Gt-Money</div>
    </ThemeProvider>
  )
}


