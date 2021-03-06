import styled from "styled-components"

export const Header = styled.header`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: flex-start;
  justify-content:space-between ;
  background-color: ${props => props.theme.colors.bodyColor};
`
export const Logo = styled.div`
    cursor: pointer;
  h1 {
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 1px;
    color: ${props => props.theme.colors.color};
  }
`

export const ThemeButton = styled.button`
    background: transparent;
    border: none;
    color: ${props => props.theme.colors.color};
    text-align: center;
    display: flex;
    align-items:center ;
    font-weight: 500;
    letter-spacing: 3px;
    font-size: 13px;
    text-transform:uppercase ;
    svg{
        width: 35px;
        height:30px;
        padding-left: 0.6rem;
        cursor: pointer;
    }
`
