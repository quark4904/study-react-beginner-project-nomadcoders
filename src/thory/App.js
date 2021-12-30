import Button from "./Button";
import styles from "./App.module.css";
import UseEffectTest from "./UseEffectTest";
import CleanUpTest from "./CleanUpTest";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Hello, World!</h1>
      <Button text={"Continue"} />
      <UseEffectTest />
      <CleanUpTest />
    </div>
  );
}

export default App;
