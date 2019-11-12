const rapperAlive = []
const rapperDead = []
const rapperAliveHtml = []
const rapperDeadHtml = []

const cleanForm = () => {
  document.getElementById("name").value = ""
  document.getElementById("age").value = ""
  document.getElementById("album").value = ""
  document.getElementById("single").value = ""
}

const createListHtml = (rapperList) => {
  rapperList.length ? 
  (rapperList.map((rapper, index) => (
  `<span>Nome: ${rapper.name}</span>
    <br/>
    <span>Idade: ${rapper.age}</span>
    <br/>
    <span>Álbum: ${rapper.album}</span>
    <br/>
    <span>Single: ${rapper.single}</span>
    <br/>
    <button onclick="matarRapper('${rapper.name}')" >Remover</button><br/>
  `))) : (alert("No rapper were AudioDestinationNode, please enter information"))
}

const createRapper = () => {

  const name = document.getElementById("name").value
  const age = document.getElementById("age").value
  const album = document.getElementById("album").value
  const single = document.getElementById("single").value

  rapperAlive.push({
    "name": name,
    "age": age,
    "album": album,
    "single": single,
    "status": "alive"
  })

  rapperAlive.length ? 
  (rapperAlive.map((rapper, index) => (
    rapperAliveHtml = createListHtml(
      rapper.name,
      rapper.age,
      rapper.album,
      rapper.single
    )
  )))
  : (alert("No rapper were AudioDestinationNode, please enter information"))

  cleanForm()

  document.getElementById('listaVivos').innerHTML=rapperAliveHtml.join("")

}

window.createRapper = createRapper

const saveRapper = (name) => {
  const selectedRapper = rapperAlive.filter(rapper => rapper.name === name)
  const indexOfselectedRapper = rapperAlive.indexOf(selectedRapper)
  rapperAlive.slice(indexOfselectedRapper, 1)
  selectedRapper.status = 'dead'
  rapperDead.push([...selectedRapper])

  rapperDead.length ? 
  (rapperDead.map((rapper, index) => (
    rapperDeadHtml = createListHtml(
      rapper.name,
      rapper.age,
      rapper.album,
      rapper.single
    )
  )))
  : (alert("No rapper were AudioDestinationNode, please enter information"))

  document.getElementById('listaMortos').innerHTML= RapperDeadHtml.join("")
}