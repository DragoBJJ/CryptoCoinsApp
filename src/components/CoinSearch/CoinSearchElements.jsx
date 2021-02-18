import styled from "styled-components";

export const CoinSearchContainer = styled.div`
  position: fixed;
  display: flex;
  z-index: 1;
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  opacity: 95%;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const CoinH1 = styled.h1`
  color: #fff;
  @media screen and (max-width: 960px) {
    margin-top: 20px;
  }
`;

export const CoinForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  @media screen and (max-width: 960px) {
    margin-left: -5px;
  }
`;

export const CoinInput = styled.input`
  font-size: 20px;
  border-radius: 10px;
  border: none;
  height: 40px;
  width: 300px;
  box-shadow: 5px 5px 5px #1a1a1a;
  outline: none;
  ::placeholder {
    color: #1a1a1a;
    letter-spacing: 1px;
  }
`;
