import { useContext } from "react";
import ToDoList from "../ToDoList/ToDoList";
import { NewContext } from "../../context/ToDoContext";

export default function MainToDo() {
  let { addTodo } = useContext(NewContext);

  return (
    <div className="bg-gradient-to-r from-indigo-400 to-blue-500">
      <div className="flex items-center justify-center h-screen">
        <div className="w-11/12 px-4 py-8 mx-auto shadow lg:w-2/4 max-w-xl rounded-xl bg-slate-100">
          <div className="flex items-center mb-6">
            <h1 className="mr-6 text-4xl font-bold text-slate-600">
              {" "}
              To Do List
            </h1>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your to do here"
              className="w-full px-2 py-3 border rounded outline-none border-grey-600"
              onKeyDown={addTodo}
            />
            
          </div>

          <ToDoList />
        </div>
      </div>
    </div>
  );
}
