const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// Load from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const saved = JSON.parse(localStorage.getItem("todos")) || [];
  saved.forEach(item => addTodo(item));
});

addBtn.addEventListener('click', () => {
  const value = input.value.trim();
  if (value !== "") {
    addTodo(value);
    saveToLocalStorage();
    input.value = "";
  }
});

function addTodo(text) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${text}
    <button onclick="removeTodo(this)">✖</button>
  `;
  list.appendChild(li);
  saveToLocalStorage();
}

function removeTodo(btn) {
  btn.parentElement.remove();
  saveToLocalStorage();
}

function saveToLocalStorage() {
  const todos = [];
  document.querySelectorAll('#todo-list li').forEach(li => {
    todos.push(li.firstChild.textContent.trim());
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
