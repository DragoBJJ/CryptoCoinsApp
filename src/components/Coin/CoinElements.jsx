import styled from "styled-components";

export const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
`;

export const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d7d7d7;
  height: 100px;
  width: 90vw;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding: 100px;
  }
`;

export const CoinData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    margin-top: 5vh;
    min-width: 660px;
  }
`;

export const CoinElement = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;
`;

export const CoinImg = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`;

export const CoinH1 = styled.h1`
  width: 150px;
  font-size: 16px;
  color: #fff;
`;

export const CoinSymbol = styled.p`
  text-transform: uppercase;
`;

export const CoinPercent = styled.p`
  color: ${({ priceChange }) => (priceChange < 0 ? " #f33" : "#16d91d")};
  font-size: 18px;
  width: 100px;
`;

export const CoinVolume = styled.p`
  width: 230px;
  color: black;
  font-size: 18px;
  color: #fff;
`;

export const CoinMarketcap = styled.p`
  width: 150px;
  color: black;
  font-size: 18px;
  color: #fff;
`;

export const CoinPrice = styled.p`
  color: black;
  font-size: 18px;
  width: 150px;
  color: #fff;
`;
