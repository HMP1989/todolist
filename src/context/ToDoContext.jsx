import { createContext, useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const NewContext = createContext();

export function AppDataProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const saveToDoList = localStorage.getItem("todos");
    return saveToDoList
      ? JSON.parse(saveToDoList)
      : [
          { id: uuidv4(), name: "Go for a 30-minute walk", status: false },
          { id: uuidv4(), name: "Read a chapter of a book", status: true },
          { id: uuidv4(), name: "Buy groceries", status: false },
        ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(event) {
    if (event.target.value == "") {
    } else {
      if (event.key == "Enter") {
        let newTodo = { id: uuidv4(), name: event.target.value, status: false };
        setTodos([...todos, newTodo]);
        event.target.value = "";
      }
    }
  }

  function statusHandler(todoId) {
    let updatedToDo = todos.map((item) => {
      if (item.id == todoId) {
        item.status = !item.status;
        return item;
      }
      return item;
    });

    setTodos(updatedToDo);
  }

  function removeToDoHandler(todoId) {
    let updatedTodosRemove = todos.filter((item) => {
      return item.id != todoId;
    });

    setTodos(updatedTodosRemove);
  }

  function changeHandler(todoId, newName) {
    let updatedTodosEdit = todos.map((item) => {
      if (item.id == todoId) {
        item.name = newName;
        return item;
      }
      return item;
    });

    setTodos(updatedTodosEdit);
  }

  return (
    <NewContext.Provider
      value={{
        todos,
        addTodo,
        statusHandler,
        removeToDoHandler,
        changeHandler,
      }}
    >
      {children}
    </NewContext.Provider>
  );
}