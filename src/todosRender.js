const render = (todosList) => {
  const todosContainer = document.querySelector('.contents');
  let todosHtml = '';
  todosList.list.forEach((todo) => {
    const checkedTodo = todo.completed ? 'checked' : '';
    const checkClass = todo.completed ? 'checked' : '';
    todosHtml += `  <div class="todo-item">
    <div>
    <input id="${todo.id}" class="todo-check" type="checkbox" ${checkedTodo} />
    <input id="${todo.id}" class="todo-edit ${checkClass}" type="text" value="${todo.description}" />
    </div>
    <button id="${todo.id}" class="remove-btn"> <i class="fas fa-trash"></i></button>
</div>
`;
  });
  todosContainer.innerHTML = todosHtml;

  // remove todo
  const removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const element = btn.parentNode;
      todosList.removeTodo(e.target.parentNode.id);
      element.remove();
    });
  });

  // edit todo
  const todosContent = document.querySelectorAll('.todo-edit');
  todosContent.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      todosList.editTodo(e.target.id, e.target.value);
    });
  });

  // Complete Todo
  const todosCheck = document.querySelectorAll('.todo-check');
  todosCheck.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      const { id } = e.target;
      todosList.completeTodo(id, e.target.checked);
      e.target.parentNode.lastElementChild.classList.toggle('checked');
    });
  });
};
export default render;
