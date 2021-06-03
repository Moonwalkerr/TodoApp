import "./App.css";
import { InputField, ShowTodo } from "./comps";
import { useContext } from "react";
import { AppContext } from "./context/context";

function App() {
  //   fetching the todo piece of state from context layer
  const [todos, setTodos] = useContext(AppContext).todos;

  return (
    <div className="App">
      <h2>TODO App by Abhishek Mishra !</h2>
      <InputField />
      {todos.length > 0 ? (
        todos.map((todo, id) => console.log(todo))
      ) : (
        <h2>No Todos yet</h2>
      )}
    </div>
  );
}

export default App;
