// tipos de variáveis
// const e let
// string, number, object, array, null, boolean
// Quando vc coda alguma coisa vc tem que lembrar que alguém vai ler
// levar em consideração a ordem do código
// levar em consideração os nomes de variáveis
// levar em consideração a formatação e também as boas práticas
// levar em consideração qual é a forma mais simples de resolver um problema.
// simples = (perfomance + complexidade + leitura)
// vai ter uma lista só e as propriedades que definirão os vivos ou mortos estarão na entidade do Rapper
// const rapper = {
//   name: 'teste',
//   age: 25,
//   album: 'nome qualquer',
//   single: 'musica qualquer',
//   live: true
// }

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
//Método para criar um rapper
const createRapper = () => {
  //Aqui usamos o getElementById pra retornar o DOM elemento que está identificado pelo ID
  const name = document.getElementById("name").value
  const age = document.getElementById("age").value
  const album = document.getElementById("album").value
  const single = document.getElementById("single").value
  //Aqui usamos o push pra inserir os valores na lista.
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



