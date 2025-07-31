import { useContext } from "react";
import ToDoITem from "./ToDoItem";
import { NewContext } from "../../context/ToDoContext";

export default function ToDoList() {

  let {todos} = useContext(NewContext)
  return (
    <ul className="list-reset">
      {todos.map((todo, index) => {
        return (
          <ToDoITem
            key={index}
            todo={todo}
          />
        );
      })}
    </ul>
  );
}
