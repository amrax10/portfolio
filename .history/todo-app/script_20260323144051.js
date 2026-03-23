function li.innerHTML = `
  <span onclick="toggleTask(this)">${taskText}</span>
  <div>
    <button onclick="editTask(this)">Edit</button>
    <button onclick="deleteTask(this)">X</button>
  </div>
`;
  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskText}</span>
    <button onclick="deleteTask(this)">X</button>
  `;

  document.getElementById("taskList").appendChild(li);

  input.value = "";

  saveTasks();
}

function deleteTask(button) {
  button.parentElement.remove();
  saveTasks();
}

function toggleTask(task) {
  task.classList.toggle("completed");
  saveTasks();
}

/* SAVE TO LOCAL STORAGE */
function saveTasks() {
  const tasks = document.getElementById("taskList").innerHTML;
  localStorage.setItem("tasks", tasks);
}

/* LOAD TASKS WHEN PAGE OPENS */
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    document.getElementById("taskList").innerHTML = saved;
  }
}

loadTasks();