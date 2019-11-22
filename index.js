const rapperList = []
//Aqui criamos a variavel createHtml que recebe como parametro o que esperamos da função a ser criada.
const createHtml = (queroVivosOuMortos) => {
 // usamos o map para percorrer cada elemento da lista e devolver um novo array com esses elementos 
 // e retornamos esse array pra função que é de onde vamos tirar os rappers vivos e mortos.
  return rapperList.map((rapper) => {
    //Aqui usamos um IF que vai dizer se o rapper é vivo ou morto.
    if (rapper.live === queroVivosOuMortos ){
      //criamos duas variaveis pra dois cenarios possiveis, se o rapper for vivo podemos remover com o deathbuton
      //Se o rapper estiver na lista de mortos revivemos com o livebutton
      const liveButton = `<button onclick="reviverRapper('${rapper.name}', true)">Reviver</button><br/>`
      const deathButton = `<button onclick="reviverRapper('${rapper.name}', false)">Remover</button><br/>`
    //Aqui retornamos o status do rapper, vivo ou morto, e formularioa html.
      return rapper.live === queroVivosOuMortos &&  `

         <span>Nome: ${rapper.name}</span>
        <br/>
        Idade: <span>${rapper.age}</span>
        <br/>
        Álbum: <span>${rapper.album}</span>
        <br/>
        Single: <span>${rapper.single}</span>
        <br/>
        ${queroVivosOuMortos? deathButton : liveButton }
        `
        //Na linha acima usamos operador ternário para mudar o rapper pra lista de vivos ou mortos.
        //Nesse caso ele funciona como um if {} else {}
        //O $ busca na função quero vivos ou mortos se o rapper é vivo ou morto 
        //e o operador ternario consegue mudar ele de lista.
    }
} )

}
// const createHtml = (queroVivosOuMortos) => {
//   if (queroVivosOuMortos === true) {
//     const liveHtml = []
//     rapperList.map((rapper) => {
//       if (rapper.live === true) {
//         liveHtml.push(`
//          <span>Nome: ${rapper.name}</span>
//         <br/>
//         Idade: <span>${rapper.age}</span>
//         <br/>
//         Álbum: <span>${rapper.album}</span>
//         <br/>
//         Single: <span>${rapper.single}</span>
//         <br/>
//         <button onclick="reviverRapper('${rapper.name}', false)">Remover</button><br/>
//         `)
//       }
//     })
//     return liveHtml

//   } else {
//     const deadHtml = []
//     rapperList.map((rapper) => {
//       if (rapper.live === false) {
//         deadHtml.push(`
//          <span>Nome: ${rapper.name}</span>
//         <br/>
//         Idade: <span>${rapper.age}</span>
//         <br/>
//         Álbum: <span>${rapper.album}</span>
//         <br/>
//         Single: <span>${rapper.single}</span>
//         <br/>
//         <button onclick="reviverRapper('${rapper.name}', true)" >Reviver</button><br/>
//         `)
//       }
//     })
//     return deadHtml
//   }
// }

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


// const matarRapper = (name) => {
//   let deadIndex = []
//   rapperList.map((rapper, index) => {
//     if (rapper.name === name) {
//       deadIndex = index
//     }
//   })
//   rapperList[deadIndex].live = false

  // const newRapperAliveHtml = createHtml(true)
  // const newRapperDeadHtml = createHtml(false)

//   document.getElementById('listaVivos').innerHTML = newRapperAliveHtml.join("")
//   document.getElementById('listaMortos').innerHTML = newRapperDeadHtml.join("")
// }

const reviveRapper = (name, criterio) => {
  let liveIndex = []
  rapperList.map((rapper, index) => {
    if (rapper.name === name) {
      liveIndex = index
    }
  })
  rapperList[liveIndex].live = criterio? true : false

  const newRapperAliveHtml = createHtml(true)
  const newRapperDeadHtml = createHtml(false)

  document.getElementById('listaVivos').innerHTML = newRapperAliveHtml.join("")
  document.getElementById('listaMortos').innerHTML = newRapperDeadHtml.join("")
}

//window.matarRapper = matarRapper
window.reviverRapper = reviveRapper



