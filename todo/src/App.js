import "./App.css";
import reducer, { initialState } from "./reducers";
import { useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { addTodo, toggleCompleted, clearCompleted } from "./action";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = (title) => {
    dispatch(addTodo(title));
  };
  const handleToggleCompleted = (id) => {
    dispatch(toggleCompleted(id));
  };
  const handleRemoveCompleted = () => {
    dispatch(clearCompleted());
  };
  return (
    <div className="App">
      {/* <button onClick={handleRemoveCompleted}>Test It</button> */}
      <h1>TODO App</h1>
      {/* <div className="listContainer">
        <h3>List of Todo</h3>
        <ul>
          {todos.map((todo) => {
            return <li>{todo.title}</li>;
          })}
        </ul>
        <button>clear completed</button>
      </div> 
      -----Cut and paste this out and replace with ToDoList
      */}
      <TodoList
        todos={state.todos}
        handleToggleCompleted={handleToggleCompleted}
        handleRemoveCompleted={handleRemoveCompleted}
      />

      <TodoForm handleAddTodo={handleAddTodo} />
      {/*-----Cut and paste this out and replace with TodoForm 
      <div className="todo-form">
        <form onSubmit={handleSumbit}>
          <label>
            Title:
            <input />
          </label>
          <button>Submit</button>
        </form>
      </div> */}
    </div>
  );
}

export default App;
