function loadTasks() {
  // Retrieve tasks from localStorage, or initialize an empty task list if none exists
  const taskData = JSON.parse(localStorage.getItem("tasks")) || {
    tasklist: [],
  };
  return taskData;
}

function addTaskToLocalStorage(taskText) {
  // Add a new task to localStorage
  const taskData = loadTasks();
  taskData.tasklist.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(taskData));
}

function appendTaskToHtml(taskText) {
  // Create and append a new task item to the HTML list
  const taskListElement = document.getElementById("taskList");
  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskListElement.appendChild(taskItem);
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize DOM elements
  const taskInputElement = document.getElementById("taskInput");
  const addButtonElement = document.getElementById("addTask");
  const taskListElement = document.getElementById("taskList");

  // Add task when button is clicked
  addButtonElement.addEventListener("click", () => {
    const taskText = taskInputElement.value;
    if (taskText === "") {
      alert("Please write something for the task");
    } else {
      addTaskToLocalStorage(taskText);
      appendTaskToHtml(taskText);
      taskInputElement.value = "";
    }
  });

  // Clean up input text when it changes
  taskInputElement.addEventListener("change", (event) => {
    const taskText = event.target.value;
    event.target.value = taskText.trim();
  });

  // Load and display existing tasks from localStorage
  const tasks = loadTasks();
  tasks.tasklist.forEach((task) => {
    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = task;
    taskListElement.appendChild(newTaskItem);
  });
});
