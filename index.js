
const  rapperModel = [
    {
        picture: "#",
        name: "Djonga",
        age: 26,
        album: "Ladrão",
        single: "Ladrão"        
    },
    {
        picture: '#',
        name: "Rapadura",
        age: 30,
        album: "RapBox",
        single: "Norte Nordeste"

    }
]
let rapperAlive = rapperModel
let rapperDead = []

let rapperAliveHtml = []
for (let i = 0; i < rapperAlive.length; i++) {
    const rapper = rapperAlive[i];
    rapperAliveHtml.push(`
    <span>${rapper.picture}</span><br>
    <span>${rapper.name}</span><br>
    <span>${rapper.age}</span><br>
    <span>${rapper.album}</span><br>
    <span>${rapper.single}</span><br>
    <button onclick="matarRapper('${rapper.name}')">Remover Rapper</button><br/>
    `)
}
document.getElementById('listaVivos').innerHTML=rapperAliveHtml.join(" ");

const killRapper = (name) => {
    console.log('' , name)
    let newRapperAlive = []
    for (let i = 0; i < rapperAlive.length; i++) {
        const rapper = rapperAlive[i];
        if (rapper.name === name) {
            rapperDead.push(rapper)
        } else {
            newRapperAlive.push(rapper)
        }
    }
    rapperAlive = newRapperAlive

    let newRapperAliveHtml = []
    for (let i = 0; i < rapperAlive.length; i++) {
       const rapper = rapperAlive[i];
       newRapperAliveHtml.push(`
       <span>${rapper.picture}</span><br>
    <span>${rapper.name}</span><br>
    <span>${rapper.age}</span><br>
    <span>${rapper.album}</span><br>
    <span>${rapper.single}</span><br>
    <button onclick="matarRapper('${rapper.name}')">Remover Rapper</button><br/>
       `) 
    }

let newRapperDeadHtml = []
for (let i = 0; i < rapperDead.length; i++) {
    const rapper = rapperDead[i];
    newRapperDeadHtml.push(`
    <span>${rapper.picture}</span><br/>
    <span>${rapper.name}</span><br/>
    <span>${rapper.age}</span><br/>
    <span>${rapper.album}</span><br/>
    <span>${rapper.single}</span><br/>
    <button onclick="reviverRapper('${rapper.name}')">Reviver Rapper</button><br/>
    `)
}
console.log('')
document.getElementById('listaVivos').innerHTML= newRapperAliveHtml.join("")
document.getElementById('listaMortos').innerHTML= newRapperDeadHtml.join("")
}

const reviveRapper = (name) => {
    console.log('',name)
    let newRapperDead = []
    for (let i = 0; i < rapperDead.length; i++) {
        const rapper = rapperDead[i]
        if ( rapper.name === name) {
            rapperAlive.push(rapper)
        } else {
            newRapperDead.push(rapper)
        }
    }
    rapperDead = newRapperDead

    let newRapperAliveHtml = []
    for (let i = 0; i < rapperAlive.length; i++) {
        const rapper = rapperAlive[i]
        newRapperAliveHtml.push(`
        <span>${rapper.picture}</span><br/>
      <span>${rapper.name}</span><br/>
      <span>${rapper.age}</span><br/>
      <span>${rapper.album}</span><br/>
      <span>${rapper.single}</span><br/>
      <button onclick="matarRapper('${rapper.name}')">Remover Rapper</button><br/>
        `)
    }

    let newRapperDeadHtml = []
    for (let i = 0; i < rapperDead.length; i++) {
        const rapper = rapperDead[i]
        newRapperDeadHtml.push(`
        <span>${rapper.picture}</span><br/>
        <span>${rapper.name}</span><br/>
        <span>${rapper.age}</span><br/>
        <span>${rapper.album}</span><br/>
        <span>${rapper.single}</span><br/>
        <button onclick="reviverRapper('${rapper.name}')">Reviver Rapper</button><br/>
        `)
    }
    document.getElementById('listaVivos').innerHTML= newRapperAliveHtml.join("")
    document.getElementById('listaMortos').innerHTML= newRapperDeadHtml.join("")
}

window.matarRapper = killRapper
window.reviverRapper = reviveRapper

const createRapper = () => {
    const picture = document.getElementById("picture").value
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const album = document.getElementById("album").value
    const single = document.getElementById("single").value

    rapperAlive.push({
        picture,
        name,
        age,
        album,
        single
    })

    let rapperAliveHtml = []
    for (let i = 0; i < rapperAlive.length; i++) {
        const rapper = rapperAlive[i];
        rapperAliveHtml.push(`
        <span>${rapper.picture}</span>
        <br/>
        <span>${rapper.name}</span>
        <br/>
        <span>${rapper.age}</span>
        <br/>
        <span>${rapper.album}</span>
        <br/>
        <span>${rapper.single}</span>
        <br/>
        <button onclick="matarRapper('${rapper.name}')" >Remover Rapper</button><br/>
        <br/>
        `)
    }
    document.getElementById('listaVivos').innerHTML=rapperAliveHtml.join("")
}