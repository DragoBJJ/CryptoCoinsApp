import React from "react";
import {
  CoinSearchContainer,
  CoinH1,
  CoinForm,
  CoinInput
} from "./CoinSearchElements";

const CoinSearch = ({ onChange }) => {
  return (
    <CoinSearchContainer>
      <CoinH1>Search a currency</CoinH1>
      <CoinForm>
        <CoinInput onChange={onChange} placeholder="Search" />
      </CoinForm>
    </CoinSearchContainer>
  );
};

export default CoinSearch;
