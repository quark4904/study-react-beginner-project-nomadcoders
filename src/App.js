import Button from "./Button";
import styles from "./App.module.css";
import UseEffectTest from "./UseEffectTest";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello, World!</h1>
      <Button text={"Continue"} />
      <UseEffectTest />
    </div>
  );
}

export default App;
