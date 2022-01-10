import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((reponse) => reponse.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  }, []); //처음에 한 번만 보여줌(아무것도 지켜보지 않음.)
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? 
        <strong>Loading...</strong> 
        : 
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      }
    </div>
  );
}

export default App;
