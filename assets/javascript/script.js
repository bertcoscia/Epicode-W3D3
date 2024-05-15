// creo un riferimento al form
const newTask = document.getElementById("newtask-form");

newTask.addEventListener("submit", (event) => {
  // evito che al submit si ricarichi la pagine
  event.preventDefault();

  // per prendere il valore di input prima seleziono l'elemento
  const taskNameInput = document.getElementById("task-name");

  // assegno ad una variabile il valore di input
  newTaskName = taskNameInput.value;

  // rimuovo il p quando aggiungo un task
  const noTasks = document.getElementById("no-tasks");
  if (noTasks) {
    noTasks.setAttribute("style", "display: none");
  }

  // creo un li e gli do come valore il valore di input
  const task = document.createElement("li");
  task.innerText = newTaskName;

  // creo uno span e ci metto dentro l'icona per eliminare i task
  const deleteBtn = document.createElement("span");
  deleteBtn.innerHTML = "<ion-icon name='trash-bin-outline'></ion-icon>";
  deleteBtn.classList.add("list-icon");

  // creo un div e ci inserisco dentro li e span creati precedentemente creati
  const taskElement = document.createElement("div");
  taskElement.classList.add("task-element");
  taskElement.append(task, deleteBtn);

  // seleziono l'elemento dove inserire il div e ce lo inserisco
  const list = document.getElementById("task-list");
  list.appendChild(taskElement);

  // puluisco l'input
  taskNameInput.value = "";

  // aggiungo click listener per togglare una classe per sbarrare il testo
  task.addEventListener("click", (event) => {
    task.classList.toggle("checked-task");
  });

  // aggiungo click listener per rimuovere il task alla pressione dell'icona
  deleteBtn.addEventListener("click", (event) => {
    taskElement.remove();
  });

  /* deleteBtn.addEventListener("mouseover", (event) => {
    deleteBtn.innerHTML = "<ion-icon name='trash-bin'></ion-icon>";
  });
 */
  /* deleteBtn.addEventListener("mouseleave", (event) => {
    deleteBtn.innerHTML = "<ion-icon name='trash-bin-outline'></ion-icon>";
  }); */
});
