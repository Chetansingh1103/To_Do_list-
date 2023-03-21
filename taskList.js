
  
const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskDescriptionInput = document.getElementById("task-description");


taskForm.addEventListener("submit", function(event) {
  
  event.preventDefault();

  const taskName = taskNameInput.value;
  const taskDescription = taskDescriptionInput.value;

  const newTask = document.createElement("li");
  newTask.innerHTML = `
    <span>${taskName} - ${taskDescription}</span>
    <button class="complete-button">Complete</button>
    <button class="delete-button">Delete</button>
  `;

 
  const completeButton = newTask.querySelector(".complete-button");
  const deleteButton = newTask.querySelector(".delete-button");

  completeButton.addEventListener("click", function() {
    
    newTask.classList.toggle("completed");
    
    newTask.removeChild(completeButton);
  });

  deleteButton.addEventListener("click", function() {
   
    taskList.removeChild(newTask);
  });

  taskList.appendChild(newTask);

  taskNameInput.value = "";
  taskDescriptionInput.value = "";
});


