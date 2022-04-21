import Todo from "./components/ToDo";
import List from "./components/List";
import { TodoContextProvider } from "./contexts/TodoContext";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import './assets/sass/app.sass'

function App() {
  return (
    
      <TodoContextProvider>
        <Cabecalho/>
        <main>
          <Todo />
          <List />
        </main>
        <Rodape/>
      </TodoContextProvider>
    
  );
}

export default App;
