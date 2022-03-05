import styled from "styled-components";

export const bgFundo = styled.main` 
    width:  750px;
    height: 450px;
`
export const Container = styled.div`
    margin-top: 1.5rem;
    height: 75%;
    background-color:#1F2A48;
    display: flex;
    align-items:center ;
    justify-content:center ;
    box-shadow: 0px 2px 14px #1f2a48;
`
export const Context = styled.div` 
    width: 90%;
    height: 90%;
    display: flex;
    .iconBanner{
        width: 30%;
        img{
            width: 70%;
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
            color: #e9eff9;
            font-weight: 600;
            font-size: 22px;
        }
        p{
            color: #7a839d;
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
            color: #5A637A;
            letter-spacing:2px;
            font-size: 14px;
            margin-bottom: 2rem;
        }
    }
`
export const CardProfile = styled.div`
    background-color: #141D2E;
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
            color: #b6bdc8;
            font-weight: 800 ;
            font-size: 20px;
        }
    }
`
export const LocationProfile = styled.div`
    width: 90%;
    height: 5rem ;
    margin-top: 1rem;
    display: flex;
    justify-content:space-between ;
    div{
        width: 30%;
        height:100% ;
    nav{
        ul{
            list-style: none;
            li{
                margin-top: 0.5rem;
                color: #b5bcce;
            }
        }
    }
    }

`