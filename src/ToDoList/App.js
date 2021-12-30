const { useState } = require("react");

function App() {
  const [note, setNote] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setNote(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (note === "") {
      return;
    }
    setTodos((current) => [note, ...current]);
    setNote("");
  };
  console.log(todos);
  return (
    <div>
      <h1>My To Dos (numbers: {todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Write your to do.."
          onChange={onChange}
          value={note}
        />
        <button>Add to do</button>
      </form>
    </div>
  );
}

export default App;
