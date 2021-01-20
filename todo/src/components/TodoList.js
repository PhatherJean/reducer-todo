import React from "react";
import Todo from "./Todo";
const TodoList = (props) => {
  const { todos, handleRemoveCompleted } = props;
  const handleClick = () => {
    handleRemoveCompleted();
  };
  return (
    <div className="listContainer">
      <h3>List of Todo</h3>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              handleToggleCompleted={props.handleToggleCompleted}
            />
          );
          /* return <li>{todo.title}</li>;  applied in its own component for scaliability*/
        })}
      </ul>
      <button onClick={handleClick}>Clear Completed</button>
    </div>
  );
};
export default TodoList;
