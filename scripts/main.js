let taskContainer = document.querySelector("#listeTaches")
let addTaskButton = document.querySelector("#ajouterTache")

addTaskButton.addEventListener(
  'click',
  function(e){
    e.preventDefault(); // Bloque l'évènement par défaut de l'url
    addTaskFunction('tache')
  }
)
function addTaskFunction(content){
  //objectif de ce qu'on doit générer
  /*
  <div class="tache">
    <div class="tacheContenu" contenteditable="true"> content </div>
    <a class="tacheInit" href="#" title="reset">Reset</a>
    <a class="tacheSupprimer" href="#" title="delete">Delete</a>
    <div class="clearBoth"></div>
  </div>
  */
  //création d'une div
  let task = document.createElement('div')
  task.classList.add('tache')

  let taskContent = document.createElement('div')
  taskContent.classList.add('tacheContenu')
  taskContent.setAttribute('contenteditable', 'true')
  taskContent.innerHTML = content //prend la valeur de la variable content

  let taskInitButton = document.createElement('a')
  taskInitButton.classList.add('tacheInit')
  taskInitButton.setAttribute('href', '#')
  taskInitButton.setAttribute('title', 'reset')
  taskInitButton.innerHTML = 'reset'

  let taskSupp = document.createElement('a')
  taskSupp.classList.add('tacheSupprimer')
  taskSupp.setAttribute('href', '#')
  taskSupp.setAttribute('title', 'delete')
  taskSupp.innerHTML = 'delete'

  let clearBoth = document.createElement('div')
  clearBoth.classList.add('clearBoth')

  taskContainer.appendChild(task)
  task.appendChild(taskContent)
  task.appendChild(taskInitButton)
  task.appendChild(taskSupp)
  task.appendChild(clearBoth)

}
