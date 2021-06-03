import { useContext } from "react";
import { AppContext } from "../../context/context";
import "./styles.css";
const ShowTodo = ({ todo, id }) => {
  const [todos, setTodos] = useContext(AppContext).todos;

  // delete todo handler
  const delTodo = () => {
    setTodos(
      todos.filter((todo, todoId) => {
        console.log(todo);
        return todoId !== id;
      })
    );
  };

  return (
    <div className="showTodo">
      <h3>{todo}</h3>
      <button onClick={delTodo}>
        <i class="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default ShowTodo;
