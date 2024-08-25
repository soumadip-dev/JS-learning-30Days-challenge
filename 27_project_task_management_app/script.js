function loadTasks() {
  // Retrieve tasks from localStorage, or initialize an empty task list if none exists
  const taskData = JSON.parse(localStorage.getItem("tasks")) || {
    tasklist: [],
  };
  return taskData;
}

function refreshTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTaskToLocalStorage(task) {
  // Add a new task to localStorage
  const taskData = loadTasks();
  taskData.tasklist.push({ ...task });
  localStorage.setItem("tasks", JSON.stringify(taskData));
}

function appendTaskToHtml(task) {
  const taskListElement = document.getElementById("taskList");
  const taskItem = document.createElement("li");

  taskItem.setAttribute("data-id", task.id);
  const taskContent = document.createElement("div");
  taskContent.classList.add("task-content");

  const taskTextElement = document.createElement("span");
  if (task.isCompleted) {
    taskTextElement.classList.add("completed");
  }
  taskTextElement.textContent = task.task;

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("completeBtn");
  completeBtn.textContent = task.isComplete ? "Reset" : "Completed";

  completeBtn.addEventListener("click", toggleTask);

  const editBtn = document.createElement("button");
  editBtn.classList.add("editBtn");
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", deleteTask);

  taskContent.appendChild(taskTextElement);
  taskContent.appendChild(completeBtn);
  taskContent.appendChild(editBtn);
  taskContent.appendChild(deleteBtn);
  taskItem.appendChild(taskContent);

  taskListElement.appendChild(taskItem);
}

function executeFilterAction(event) {
  const taskListElement = document.getElementById("taskList");
  const element = event.target;
  const value = element.getAttribute("data-filter");
  taskListElement.innerHTML = "";
  const tasks = loadTasks();

  if (value === "all") {
    tasks.tasklist.forEach((task) => {
      appendTaskToHtml(task);
    });
  } else if (value === "pending") {
    tasks.tasklist.forEach((task) => {
      if (task.isComplete !== true) {
        appendTaskToHtml(task);
      }
    });
  } else {
    tasks.tasklist.forEach((task) => {
      if (task.isComplete === true) {
        appendTaskToHtml(task);
      }
    });
  }
}

function toggleTask(event) {
  const taskItem = event.target.parentElement.parentElement;
  const taskId = taskItem.getAttribute("data-id");
  const tasks = loadTasks();

  tasks.tasklist.forEach((task) => {
    if (task.id == taskId) {
      task.isComplete = !task.isComplete;
      const taskTextElement = taskItem.querySelector(".task-content span");
      const completeBtn = taskItem.querySelector(".completeBtn");

      if (task.isComplete) {
        taskTextElement.classList.add("completed");
        completeBtn.textContent = "Reset";
      } else {
        taskTextElement.classList.remove("completed");
        completeBtn.textContent = "Completed";
      }
    }
  });

  refreshTasks(tasks);
}

function resetHtmlTasks(tasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.tasklist.forEach((task) => {
    appendTaskToHtml(task);
  });
}

function deleteTask(event) {
  const taskItem = event.target.parentElement.parentElement;
  const taskId = taskItem.getAttribute("data-id");
  let tasks = loadTasks();
  tasks.tasklist = tasks.tasklist.filter((task) => task.id != taskId);
  refreshTasks(tasks);
  resetHtmlTasks(tasks);
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize DOM elements
  const taskInputElement = document.getElementById("taskInput");
  const addButtonElement = document.getElementById("addTask");

  let taskData = loadTasks();

  const taskListElement = document.getElementById("taskList");

  const filterBtn = document.getElementsByClassName("filterButton");

  for (const btn of filterBtn) {
    btn.addEventListener("click", executeFilterAction);
  }

  // Add task when button is clicked
  addButtonElement.addEventListener("click", () => {
    const taskText = taskInputElement.value.trim();
    if (taskText === "") {
      alert("Please write something for the task");
    } else {
      taskData = loadTasks();
      const id = taskData.tasklist.length;
      const task = { task: taskText, isComplete: false, id };
      addTaskToLocalStorage(task, id);
      appendTaskToHtml(task, id);
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
    appendTaskToHtml(task);
  });
});
