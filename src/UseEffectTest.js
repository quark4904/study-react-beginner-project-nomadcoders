import { useState, useEffect } from "react";

function UseEffectTest() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((event) => event + 1);
  };
  console.log("call an api");

  useEffect(() => console.log("I run only once"), []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default UseEffectTest;
