import { useState, useEffect } from "react";

function UseEffectTest() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setCounter((event) => event + 1);
  };
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => console.log("I run only once"), []);
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'counter' & 'keyword' change");
  }, [counter, keyword]);
  return (
    <div>
      <hr />
      <input
        type="text"
        placeholder="search..."
        onChange={onChange}
        value={keyword}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <hr />
    </div>
  );
}

export default UseEffectTest;
