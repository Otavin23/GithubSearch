import React from "react"
import * as S from "./style"
import Header from "../header/index"
import InputSearch from "../InputSearch"
import { useContext } from "react"
import { SearchGithub } from "../../context/SearchGithubContext"

const Main = ({theme, setTheme}) => {
  const { date, pesquisa } = useContext(SearchGithub)
  const {
    login,
    bio,
    avatar_url,
    public_repos,
    following,
    followers,
    location,
    created_at,
  } = date
  return (
    <S.bgFundo>
      <Header theme={theme} setTheme={setTheme}/>
      <InputSearch />
      <S.Container>
        {pesquisa !== "" ? (
          <>
          {date.message === "Not Found" ? (
            <p id="error">Não encontrado</p>
          ) : (
            <>
            <S.Context>
              <div className="iconBanner">
                <img src={avatar_url} />
              </div>
              <S.Information>
                <div className="name-date">
                  <h2>{login}</h2>
                  <p>Joined {created_at}</p>
                </div>
                <div className="octProfile">
                  <p id="blue">#0ctacat</p>
                  <p id="bio">{bio == " " ? bio : "This profile has no bio"}</p>
                  <S.CardProfile>
                    <div>
                      <p id="stylecolor">repos</p>
                      <p>{public_repos}</p>
                    </div>
                    <div>
                      <p id="stylecolor">Followers</p>
                      <p>{followers}</p>
                    </div>
                    <div>
                      <p id="stylecolor">Following</p>
                      <p>{following}</p>
                    </div>
                  </S.CardProfile>
                </div>
                <S.LocationProfile>
                  <div className="locationlink">
                    <nav>
                      <ul>
                        <li>{location}</li>
                        <li>https://github.blog</li>
                      </ul>
                    </nav>
                  </div>
                  <div className="alower">
                    <nav>
                      <ul>
                        <li>Not Available</li>
                        <li>bgithub</li>
                      </ul>
                    </nav>
                  </div>
                </S.LocationProfile>
              </S.Information>
            </S.Context>
            </>
          )}
          </>
        ): (
          <>
            <p>Digite O nome</p>
          </>
        )}
      </S.Container>
    </S.bgFundo>
  )
}
export default Main
