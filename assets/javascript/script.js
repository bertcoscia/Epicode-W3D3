const newTask = document.getElementById("newtask-form"); /* creo un riferimento al form */

newTask.addEventListener("submit", (event) => {
  event.preventDefault(); /* evito che al submit si ricarichi la pagine*/
  const taskNameInput = document.getElementById("task-name"); /* per prenedere il valore di input prima seleziono l'elemento */
  newTaskName = taskNameInput.value; /* assegno ad una variabile il valore di input */

  const task = document.createElement("li");
  task.classList.add("prova");
  task.innerText = newTaskName;

  const list = document.getElementById("task-list");
  list.appendChild(task);

  taskNameInput.value = "";

  task.addEventListener("click", (event) => {
    task.classList.toggle("checked-task");
  });
});

/* const completedTask = document.getElementsByTagName("li");
console.log(completedTask);
completedTask.addEventListener("click", (event) => {}); */
