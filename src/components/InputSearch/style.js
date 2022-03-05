import styled from "styled-components"


export const BgFundo = styled.section`
    width: 100%;
    height: 4rem;
    background-color:#1F2A48;
    border-radius: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Container = styled.div`
    width: 95%;
    height: 3rem;
    display: flex;
    justify-content:space-between ;
    .inputIc{
        width: 70%;
        position: relative;
        display: flex;
        align-items: center;
        input{
            width: 100%;
            border: none;
            background: transparent;
            outline: none;
            padding-left: 3rem;
            color: white;
            font-size: 20px;
            font-weight: 500;
            &::placeholder{
                color: #CDD2D6;
                font-weight: 500;
                font-size: 14px;
                letter-spacing: 1px;
            }
        }
        svg{
            position: absolute;
            left: 1px;
            width: 30px;
            height: 30px;
            color: #0177FE;
        }
    }
    button{
        border: none;
        background-color: #037AFC;
        color: #66B9FF;
        width: 100px;
        color: wheat;
        font-size: 15px;
        font-weight: bold;
        border-radius: 0.5rem;
        cursor: pointer;
    }
`