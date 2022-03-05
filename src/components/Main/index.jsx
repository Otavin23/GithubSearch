import React from 'react'
import * as S from "./style"
import Header from "../header/index"
import InputSearch from '../InputSearch'
import { useContext } from 'react'
import { SearchGithub } from '../../context/SearchGithubContext'

const Main = ()=>{
    const {date} = useContext(SearchGithub)
    return (
        <S.bgFundo>
            <Header />
            <InputSearch />
            <S.Container>
                <S.Context>
                    <div className="iconBanner">
                        <img src="" />
                    </div>
                    <S.Information>
                        <div className="name-date">
                            <h2>The Octocot</h2>
                            <p>Joined 25 Jan 2021</p>
                        </div>
                        <div className="octProfile">
                            <p id="blue">#0ctacat</p>
                            <p id="bio">This profile has no bio</p>
                            <S.CardProfile>
                                <div>
                                    <p id="stylecolor">repos</p>
                                    <p>8</p>
                                </div>
                                <div>
                                    <p id="stylecolor">Followers</p>
                                    <p>3938</p>
                                </div>
                                <div>
                                    <p id="stylecolor">Following</p>
                                    <p>9</p>
                                </div>
                            </S.CardProfile>
                            </div>
                        <S.LocationProfile>
                            <div className="locationlink">
                                <nav>
                                    <ul>
                                        <li>San Francisco</li>
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
            </S.Container>
        </S.bgFundo>
    )
}
export default Main 