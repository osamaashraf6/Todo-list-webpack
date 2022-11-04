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
  const id = Math.floor(Math.random() * 1000);
  const newTodo = { description, completed, index, id };
  if (description) {
    todosList.addTodo(newTodo);
    render(todosList);
    document.querySelector(".input-todo").value = "";
  }
});

// addTodoBtn.addEventListener("click", () => {
//   const description = document.querySelector(".input-todo").value.trim();
//   const completed = false;
//   const index = todosList.list.length + 1;
//   const id = Math.floor(Math.random() * 1000);
//   const newTodo = { description, completed, index, id };
//   if (description) {
//     todosList.addTodo(newTodo);
//     render(todosList);
//     document.querySelector(".input-todo").value = "";
//   }
// });
