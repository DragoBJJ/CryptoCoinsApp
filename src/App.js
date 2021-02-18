import React, { useEffect, useState } from "react";
import CoinSearch from "./components/CoinSearch/index";
import CoinsWrapper from "./components/CoinsWrapper/index";
import Coin from "./components/Coin";
import { fetchCryptoCoins } from "./API/api";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCryptoCoins(setCoins);
  }, []);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  let filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <CoinSearch onChange={handleChange} />
      <CoinsWrapper>
        {filteredCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
      </CoinsWrapper>
    </div>
  );
}

export default App;
