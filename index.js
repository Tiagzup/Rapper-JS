const rapperList = []

const createHtml = (queroVivosOuMortos) => {
  if (queroVivosOuMortos === true) {
    const liveHtml = []
    rapperList.map((rapper) => {
      if (rapper.live === true) {
        liveHtml.push(`
         <span>Nome: ${rapper.name}</span>
        <br/>
        Idade: <span>${rapper.age}</span>
        <br/>
        Álbum: <span>${rapper.album}</span>
        <br/>
        Single: <span>${rapper.single}</span>
        <br/>
        <button onclick="matarRapper('${rapper.name}')" >Remover</button><br/>
        `)
      }
    })
    return liveHtml

  } else {
    const deadHtml = []
    rapperList.map((rapper) => {
      if (rapper.live === false) {
        deadHtml.push(`
         <span>Nome: ${rapper.name}</span>
        <br/>
        Idade: <span>${rapper.age}</span>
        <br/>
        Álbum: <span>${rapper.album}</span>
        <br/>
        Single: <span>${rapper.single}</span>
        <br/>
        <button onclick="reviverRapper('${rapper.name}')" >Reviver</button><br/>
        `)
      }
    })
    return deadHtml
  }
}
const createRapper = () => {
  const name = document.getElementById("name").value
  const age = document.getElementById("age").value
  const album = document.getElementById("album").value
  const single = document.getElementById("single").value

  rapperList.push({
    name,
    age,
    album,
    single,
    live: true
  })
  const liveHtml = createHtml(true).join("")
  document.getElementById('listaVivos').innerHTML = liveHtml
  document.getElementById("name").value = ""
  document.getElementById("age").value = ""
  document.getElementById("album").value = ""
  document.getElementById("single").value = ""
}
window.createRapper = createRapper

const matarRapper = (name) => {
  let deadIndex = []
  rapperList.map((rapper, index) => {
    if (rapper.name === name) {
      deadIndex = index
    }
  })
  rapperList[deadIndex].live = false

  const newRapperAliveHtml = createHtml(true)
  const newRapperDeadHtml = createHtml(false)

  document.getElementById('listaVivos').innerHTML = newRapperAliveHtml.join("")
  document.getElementById('listaMortos').innerHTML = newRapperDeadHtml.join("")
}

const reviveRapper = (name) => {
  let liveIndex = []
  rapperList.map((rapper, index) => {
    if (rapper.name === name) {
      liveIndex = index
    }
  })
  rapperList[liveIndex].live = true

  const newRapperAliveHtml = createHtml(true)
  const newRapperDeadHtml = createHtml(false)

  document.getElementById('listaVivos').innerHTML = newRapperAliveHtml.join("")
  document.getElementById('listaMortos').innerHTML = newRapperDeadHtml.join("")
}

window.matarRapper = matarRapper
window.reviverRapper = reviveRapper



