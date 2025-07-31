import { useContext, useState } from "react";
import DeleteToDoIcon from "./DeleteToDo";
import EditToDoIcon from "./EditToDo";
import { NewContext } from "../../context/ToDoContext";

export default function ToDoITem({ todo }) {
  const [editMode, setEditMode] = useState(false);

  let { statusHandler, changeHandler } = useContext(NewContext);

  function closeInput(event) {
    if (event.key == "Enter") {
      changeHandler(todo.id, event.target.value);
      setEditMode(false);
    }
  }

  return (
    <li className="relative flex items-center justify-between px-2 py-6 border-b">
      {editMode ? (
        <input
          type="text"
          defaultValue={todo.name}
          onKeyDown={() => {
            closeInput(event);
          }}
          className="w-full px-2 py-3 border rounded outline-none border-grey-600"
        />
      ) : (
        <>
          <div>
            <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.status}
              onChange={() => {
                statusHandler(todo.id);
              }}
            />
            <p
              className={`inline-block mt-1 ml-2 text-gray-600 ${
                todo.status ? "line-through" : ""
              }`}
            >
              {todo.name}
            </p>
          </div>
          <div
            
            className="absolute right-0 flex items-center space-x-2"
          >
            <EditToDoIcon setEditMode={setEditMode} />
            <DeleteToDoIcon todo={todo} />
          </div>
        </>
      )}
    </li>
  );
}
