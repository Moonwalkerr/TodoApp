import { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import "./styles.css";
import undraw from "../../assets/undraw.svg";

const InputField = () => {
  const [inputValue, setInputValue] = useState("");

  //   fetching the todo piece of state from context layer
  const [todos, setTodos] = useContext(AppContext).todos;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page from refreshing

    // to prevent taking blank inputs
    if (inputValue !== "") {
      // updating the todos piece of state inside context layer
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };
  return (
    <>
      <figure>
        <img src={undraw} alt="TodoApp" />
        <figcaption>Add Your Todos Here...</figcaption>
      </figure>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="✍️ Write your Next Plan today.."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        <button id="submitBtn" type="submit">
          <i class="fas fa-plus"></i>
        </button>
      </form>
    </>
  );
};

export default InputField;
