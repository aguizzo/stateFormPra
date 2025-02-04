import { useState } from "react";

const categories = ["cooking", "cleaning", "shopping"];

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const [newTodo, setNewTodo] = useState({
    todoName: "",
    category: "",
    isDone: false,
  });

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setNewTodo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, newTodo]);
  };

  const handleCheckTodo = (e, i) => {
    let copy = [...todoList];
    copy[i].isDone = !copy[i].isDone;
    setTodoList(copy);
  };

  const completedTodos = todoList.filter((todo) => todo.isDone).length;

  return (
    <>
      <h2>Create to do</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todoName">To do Name</label>
          <input type="text" name="todoName" onChange={handleChangeForm} />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={handleChangeForm}>
            {categories.map((c) => (
              <option value={c} key={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" value="Create To Do" />
      </form>
      <h2>Todo List</h2>
      <p>Completed To Do: {completedTodos}</p>
      <table>
        <thead>
          <tr>
            <th>To do</th>
            <th>Category</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo, i) => {
            return (
              <tr key={i}>
                <td>{todo.todoName}</td>
                <td>{todo.category}</td>
                <td>
                  <input
                    type="checkbox"
                    value={todo.isDone}
                    onChange={(e) => handleCheckTodo(e, i)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
