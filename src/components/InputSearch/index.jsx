import React from "react"
import * as S from "./style"
import { useContext } from "react"
import { SearchGithub } from "../../context/SearchGithubContext"

const InputSearch = () => {
  const {setDate, pesquisa, NameSearch } = useContext(SearchGithub)
  
  async function execApi(){
    if (pesquisa === ""){
      return;
    }else{
      const res = await fetch(`https://api.github.com/users/${pesquisa}`)
      const json = await res.json()
      return setDate(json)
    }
  }
  return (
    <S.BgFundo>
      <S.Container>
        <div className="inputIc">
          <input
            type="text"
            placeholder="Search Github username..."
            onChange={({ target }) => NameSearch(target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Search</title>
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="36"
              d="M338.29 338.29L448 448"
            />
          </svg>
        </div>
        <button onClick={execApi}>
          Search
        </button>
      </S.Container>
    </S.BgFundo>
  )
}
export default InputSearch
