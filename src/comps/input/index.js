import { useState } from "react";

const InputField = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = () => {
    console.log(inputValue);
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
