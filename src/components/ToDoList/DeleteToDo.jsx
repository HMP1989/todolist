import { useContext } from "react";
import { NewContext } from "../../context/ToDoContext";

export default function DeleteToDoIcon({todo}) {

  let {removeToDoHandler} = useContext(NewContext);

  return (
    <div onClick={() => removeToDoHandler(todo.id)}>
      <img src="/todolist/icons/trash.svg" alt="trash" className="cursor-pointer w-4 h-4" />
    </div>
  );
}
