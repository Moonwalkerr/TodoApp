import { useState, useContext } from "react";
import { AppContext } from "../../context/context";

const InputField = () => {
  const [inputValue, setInputValue] = useState("");

  //   fetching the todo piece of state from context layer
  const [todos, setTodos] = useContext(AppContext).todos;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page from refreshing

    // updating the todos piece of state inside context layer
    setTodos([...todos, inputValue]);
    // console.log(todos);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button type="submit">+</button>
    </form>
  );
};

export default InputField;
