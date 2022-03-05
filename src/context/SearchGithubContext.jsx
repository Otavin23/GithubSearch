import React, { createContext, useState, useEffect } from "react"

export const SearchGithub = createContext({})

export function SearchGithubProvider({ children }) {

  const [pesquisa, setPesquisa] = useState("")
  const [date, setDate] = useState([])
  const [theme, setTheme] = useState("dark")

  function NameSearch(namee) {
    return setPesquisa(namee)
  }

  const valor = {
    pesquisa,
    NameSearch,
    date,
    setDate,
    theme,
    setTheme,
  }

  return <SearchGithub.Provider value={valor}>{children}</SearchGithub.Provider>
}
