import styled from "styled-components"

export const BgFundo = styled.section`
  width: 100%;
  height: 3.5rem;
  background-color: ${(props) => props.theme.colors.fundo};
  box-shadow: 0px 5px 20px ${(props) => props.theme.colors.shadow};
  transition: all 0.6s ease-out;

  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Container = styled.div`
  width: 95%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  .inputIc {
    width: 70%;
    position: relative;
    display: flex;
    align-items: center;
    input {
      width: 100%;
      border: none;
      background: transparent;
      outline: none;
      padding-left: 3rem;
      color: ${(props) => props.theme.colors.color};
      transition: all 0.6s ease-out;

      font-size: 20px;
      font-weight: 500;
      &::placeholder {
        color: ${(props) => props.theme.colors.color};
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 1px;
      }
    }
    svg {
      position: absolute;
      left: 1px;
      width: 30px;
      height: 30px;
      color: #0177fe;
    }
  }
  button {
    border: none;
    background-color: #037afc;
    color: #66b9ff;
    width: 100px;
    color: wheat;
    font-size: 15px;
    font-weight: bold;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`
