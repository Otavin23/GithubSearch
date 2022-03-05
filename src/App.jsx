import React, {useState}from "react"
import Main from "./components/Main"
import { GlobalStyle } from "./style/GobalStyle"
import { SearchGithubProvider } from "./context/SearchGithubContext"
import { ThemeProvider } from "styled-components"
import { themeBlack, ThemeLight} from "./style/theme/theme"


const themes = {
  light: ThemeLight, 
  dark: themeBlack,
}

const App = () => {
  const [theme ,setTheme] = useState("dark")

  return (
    <ThemeProvider theme={themes[theme]}>
      <SearchGithubProvider>
        <GlobalStyle />
        <Main theme={theme} setTheme={setTheme}/>
      </SearchGithubProvider>
    </ThemeProvider>

  )
}
export default App
