const render = (todosList) => {
  const todosContainer = document.querySelector('.contents');
  let todosHtml = '';
  todosList.list.forEach((todo) => {
    todosHtml += `  <div class="todo-item">
    <div>
        <input type="checkbox" />
        <input id="${todo.id}" class="todo-edit" type="text" value="${todo.description}" />
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
      todosList.removeTodo(Number(e.target.parentNode.id));
      element.remove();
    });
  });

  // edit todo
  const todosContent = document.querySelectorAll('.todo-edit');
  todosContent.forEach((todo) => {
    todo.addEventListener('change', (e) => {
      todosList.editTodo(Number(e.target.id), e.target.value);
    });
  });
};

export default render;
