function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <div>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">X</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
  saveTasks();
}

// Delete task
function deleteTask(button) {
  button.parentElement.parentElement.remove();
  saveTasks();
}

// Toggle completed
function toggleTask(task) {
  task.classList.toggle("completed");
  saveTasks();
}

// Edit task
function editTask(button) {
  const span = button.parentElement.parentElement.querySelector("span");
  const newTask = prompt("Edit your task:", span.textContent);

  if (newTask !== null && newTask.trim() !== "") {
    span.textContent = newTask.trim();
    saveTasks();
  }
}

// Save tasks to localStorage
function saveTasks() {
  const tasks = document.getElementById("taskList").innerHTML;
  localStorage.setItem("tasks", tasks);
}

// Load tasks from localStorage
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    document.getElementById("taskList").innerHTML = saved;
  }
}

// Enter key adds task
const input = document.getElementById("taskInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Load tasks on page load
loadTasks();