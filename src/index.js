import "./style.css";
import render from "./todosRender";
import Todos from "./todos";

const todosList = new Todos();
render(todosList);

const addTodoBtn = document.querySelector(".add-btn");
addTodoBtn.addEventListener("click", () => {
  const description = document.querySelector(".input-todo").value.trim();
  const completed = false;
  const index = todosList.list.length + 1;
  const id = `id${Math.random().toString(16).slice(2)}`;
  const newTodo = {
    description,
    completed,
    index,
    id,
  };
  if (description) {
    todosList.addTodo(newTodo);
    render(todosList);
    document.querySelector(".input-todo").value = "";
  }
});

// clear all completed todos
const clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", () => {
  todosList.clearCompletedTodos();
  render(todosList);
});
