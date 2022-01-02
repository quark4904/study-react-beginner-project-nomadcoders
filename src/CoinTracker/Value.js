function Value({ coins, value }) {
  const coinLength = (item) => {
    let jsonModified = [];
    for (let i = 0; i < 10; i++) {
      jsonModified.push(item[i]);
    }
    return jsonModified;
  };

  return (
    <div>
      <ul>
        {coinLength(coins).map((coin) => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol}) : {""}
            {(value / coin.quotes.USD.price).toFixed(8)} {coin.symbol}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Value;
