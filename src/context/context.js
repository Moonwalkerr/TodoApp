import {useState,createContext} from "react";

export const AppContext = createContext();

const ContextProvder = (props) => {
   
    const [todos, setTodos] = useState([]);
   
    return ( 
        <AppContext.Provider
        value={{
            todos=[todos,setTodos]
        }}
        >
            {props.children}
        </AppContext.Provider>
     );
}
 
export default ContextProvder;