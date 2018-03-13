let taskContainer = document.querySelector("#listeTaches")
let addTaskButton = document.querySelector("#ajouterTache")

/*
Enregistrement d'un tableau en localStorage
let tab =[12,1,23,56,45]
tab = JSON.stringify(tab)
localStorage.setItem("testTab",tab)
*/

/*
Lecture d'un tableau dans le localStorage
let tab = localStorage.getItem("testTab")
tab = JSON.parse(tab)
console.log(tab)
 */

init();

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
  taskContent.addEventListener('blur',function(){updateLocalStorage()})

  let taskInitButton = document.createElement('a')
  taskInitButton.classList.add('tacheInit')
  taskInitButton.setAttribute('href', '#')
  taskInitButton.setAttribute('title', 'reset')
  taskInitButton.innerHTML = 'reset'
  taskInitButton.addEventListener(
    'click',
    function(e){
      e.preventDefault()
      taskContent.innerHTML='tache'
      updateLocalStorage()
    })

  let taskSupp = document.createElement('a')
  taskSupp.classList.add('tacheSupprimer')
  taskSupp.setAttribute('href', '#')
  taskSupp.setAttribute('title', 'delete')
  taskSupp.innerHTML = 'delete'
  taskSupp.addEventListener(
    'click',
    function(e){
      e.preventDefault()
      task.parentNode.removeChild(task)
      updateLocalStorage()
    }
  )

  let clearBoth = document.createElement('div')
  clearBoth.classList.add('clearBoth')

  taskContainer.appendChild(task)
  task.appendChild(taskContent)
  task.appendChild(taskInitButton)
  task.appendChild(taskSupp)
  task.appendChild(clearBoth)
  updateLocalStorage()
}

/*
    FONCTION QUI PERMET DE METTRE A JOUR LE LOCALSTORAGE
*/
function updateLocalStorage(){
  // récupérer toutes les balises qui ont la classe tacheContenu
  let recTaskList = document.querySelectorAll(".tacheContenu")
  // Parcourir tous ces élements et aller enregistrer leur contenu dans un tableau
  let tempTab = new Array()
  for (let i = 0; i < recTaskList.length; i++) {
    tempTab.push(recTaskList[i].innerHTML)
  }
  // convertir ce tableau dans une variable JSON sous forme de stringify
  tempTab = JSON.stringify(tempTab)
  // enregistrer cette variable dans le localStorage
  localStorage.setItem("localTaskList",tempTab)
}

function init(){
  // Récupérer le localStorage et le stocker dans une variable
  let localstoragerecup = localStorage.getItem ("localTaskList")
  // Si la variable n'est pas null
  if (localstoragerecup != null) {
    // Convertir cette variable en 1 tableau
    localstoragerecup=JSON.parse(localstoragerecup)

    // parcourir tout le tableau
    for (let i= 0; i < localstoragerecup.length; i++) {
      // récupérer le contenu et l'afficher sous forme d'un tache en utilisant la fonction addTaskFunction
       addTaskFunction(localstoragerecup[i])
    }
  }
}
