import React, { createContext, useState, useEffect } from "react"

export const SearchGithub = createContext({})

export function SearchGithubProvider({ children }) {

  const [pesquisa, setPesquisa] = useState("")
  const [date, setDate] = useState([])

  function NameSearch(namee) {
    return setPesquisa(namee)
  }
  
  const exec = useEffect(()=> {
    async ()=> {
      const res = await fetch(`https://api.github.com/users/${pesquisa}`)
      const json = await res.json()
      return setDate(json)
    } 
  }, [])

  
    async function request(){
      const res = await fetch(`https://api.github.com/users/${pesquisa}`)
      const json = await res.json()
      return setDate(json)
    } 

  const valor = {
    pesquisa,
    NameSearch,
    date,
    exec,
    
  }

  return <SearchGithub.Provider value={valor}>{children}</SearchGithub.Provider>
}
