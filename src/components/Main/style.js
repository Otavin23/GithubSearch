import styled from "styled-components";

export const bgFundo = styled.main` 
    width:  750px;
    height: 450px;
`
export const Container = styled.div`
    margin-top: 1.5rem;
    height: 75%;
    background-color: ${props => props.theme.colors.fundo};
    transition: all 0.6s ease-out;
    display: flex;
    align-items:center ;
    justify-content:center ;
    box-shadow: 0px 5px 20px ${props => props.theme.colors.shadow};
    #error{
        color: ${props => props.theme.colors.text};
        font-size: 20px;
    }
`
export const Context = styled.div` 
    width: 90%;
    height: 90%;
    display: flex;
    #error{
        color: wheat;
        font-size: 20px;
    }
    .iconBanner{
        width: 30%;
        img{
            width: 70%;
            border-radius: 50%;
        }
    }
`  
export const Information = styled.div`
    width:100% ;
    .name-date{
        display: flex;
        justify-content: space-between;
        align-items: center;
        h2{
            color: ${props => props.theme.colors.text};
            font-weight: 600;
            font-size: 22px;
        }
        p{
            color: ${props => props.theme.colors.textSegundario};
            font-size: 15px;
            font-weight: 600;
            letter-spacing:1px;
        }
    }
    .octProfile{
        margin-top: 0.4rem;
        #blue{
            color: #29538A;
            font-size: 14px;
            font-weight:550;
            letter-spacing: 0.5px;
            margin-bottom: 1rem;
        }
        #bio{
            color: ${props => props.theme.colors.text};
            letter-spacing:2px;
            font-size: 14px;
            margin-bottom: 2rem;
        }
    }
`
export const CardProfile = styled.div`
    background-color: ${props => props.theme.colors.cardBg};
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-around;
    align-items:center ;
    border-radius: 0.5rem;
    div{
        #stylecolor{
            color: #585f6f;
            font-size: 14px;
            font-weight:600 ;
        }
        p{
            color: ${props => props.theme.colors.textCard};
            font-weight: 800 ;
            font-size: 20px;
        }
    }
`
export const LocationProfile = styled.div`
    width: 100%;
    height: 5rem ;
    margin-top: 1rem;
    display: flex;
    justify-content:space-between ;
    div{
        width: 40%;
        height:100% ;
    nav{
        ul{
            list-style: none;
            li{
                margin-top: 0.5rem;
                color: ${props => props.theme.colors.color};
            }
        }
    }
    }

`