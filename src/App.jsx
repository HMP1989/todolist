import MainToDo from "./components/MainTodo/MainToDo";
import { AppDataProvider } from "./context/ToDoContext";

export default function App() {
  return (
    <AppDataProvider>
      <MainToDo />
    </AppDataProvider>
  );
}
