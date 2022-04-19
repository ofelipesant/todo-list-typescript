import Todo from "./components/ToDo";
import List from "./components/List";
import { TodoContextProvider } from "./contexts/TodoContext";

function App() {
  return (
    <main>
      <TodoContextProvider>
        <Todo />
        <List />
      </TodoContextProvider>
    </main>
  );
}

export default App;
