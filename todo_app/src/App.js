import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoTemplete from "./components/TodoTemplete";

function App() {
  return (
    <TodoTemplete>
      <TodoInsert></TodoInsert>
      {/* <TodoList></TodoList> */}
    </TodoTemplete>
  );
}

export default App;
