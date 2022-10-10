import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global/GlobalStyles";
import { defaultTheme } from "./styles/theme/defaul";

export function App (){
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>ola mundo</h1>

      <GlobalStyles />
    </ThemeProvider>
  )
}