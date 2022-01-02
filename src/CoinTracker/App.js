import { useState, useEffect } from "react";
import Value from "./Value";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefalut();
    if (value === "") {
      return;
    }
    setValue("");
  };

  const onChange = (event) => setValue(event.target.value);

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price.toFixed(3)}
              USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <div>
        <h3>보유 자산</h3>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={value}
            placeholder="write you values"
          ></input>
          <span> USD</span>
        </form>
      </div>
      <hr />
      <div>
        <h3>보유 자산으로 구매 가능한 암호 화폐 수량(BTC)</h3>
        {value && <Value coins={coins} value={value} />}
      </div>
    </div>
  );
}

export default App;
