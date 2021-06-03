import { useContext } from "react";
import { AppContext } from "../../context/context";

const ShowTodo = ({ todo, id }) => {
  const [todos, setTodos] = useContext(AppContext).todos;

  // delete todo handler
  const delTodo = () => {
    setTodos(todos.map((todo, Todoid) => Todoid !== id && todo));
  };

  return (
    <div className="showTodo">
      <h3>{todo}</h3>
      <button onClick={delTodo}>Del</button>
    </div>
  );
};

export default ShowTodo;
