import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :("); // component가 destroy될때 무엇인가를 실행시켜준다.
    // 분석 결과를 보내준다거나하는 역할
  }, []);
  return <h1>Hello</h1>;
}

function CleanUpTest() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default CleanUpTest;
