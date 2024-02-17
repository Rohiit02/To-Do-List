document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("addButton").addEventListener("click", addTask);
});

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  var taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  
  var li = document.createElement("li");
  li.textContent = taskText;
  
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(li);
  });
  
  li.appendChild(deleteButton);
  taskList.appendChild(li);
  
  taskInput.value = "";
}
