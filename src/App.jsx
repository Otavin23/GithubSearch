import React from "react"
import Main from "./components/Main"
import { GlobalStyle } from "./style/GobalStyle"
import { SearchGithubProvider } from "./context/SearchGithubContext"

const App = () => {

  return (
      <SearchGithubProvider>
        <GlobalStyle />
        <Main />
      </SearchGithubProvider>

  )
}
export default App
