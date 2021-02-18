import React from "react";
import {
  CoinContainer,
  CoinRow,
  CoinElement,
  CoinH1,
  CoinSymbol,
  CoinData,
  CoinPrice,
  CoinVolume,
  CoinImg,
  CoinPercent,
  CoinMarketcap
} from "./CoinElements";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap
}) => {
  return (
    <CoinContainer>
      <CoinRow>
        <CoinElement>
          <CoinImg src={image} />
          <CoinH1>{name}</CoinH1>
          <CoinSymbol>{symbol}</CoinSymbol>
        </CoinElement>
        <CoinData>
          <CoinPrice>{price} €</CoinPrice>
          <CoinVolume>{volume} €</CoinVolume>
          <CoinPercent priceChange={priceChange}>{priceChange} %</CoinPercent>
          <CoinMarketcap>Mkt Cap: {marketcap}</CoinMarketcap>
        </CoinData>
      </CoinRow>
    </CoinContainer>
  );
};

export default Coin;
