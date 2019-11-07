
const  rapperModel = []

const createRapper = () => {
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const album = document.getElementById("album").value
    const single = document.getElementById("single").value

    rapperAlive.push({
        name,
        age,
        album,
        single
    })

    let rapperAliveHtml = []
    for (let i = 0; i < rapperAlive.length; i++) {
        const rapper = rapperAlive[i];
        rapperAliveHtml.push(`
        Nome: <span>${rapper.name}</span>
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
    document.getElementById('listaVivos').innerHTML=rapperAliveHtml.join("")
}

let rapperAlive = rapperModel

let rapperDead = []

let rapperAliveHtml = []
for (let i = 0; i < rapperAlive.length; i++) {
    const rapper = rapperAlive[i];
    rapperAliveHtml.push(`
    Nome: <span>${rapper.name}</span><br>
    Idade: <span>${rapper.age}</span><br>
    Álbum: <span>${rapper.album}</span><br>
    Single: <span>${rapper.single}</span><br>
    <button onclick="matarRapper('${rapper.name}')">Remover</button><br/>
    `)
}
document.getElementById('listaVivos').innerHTML=rapperAliveHtml.join(" ");

const killRapper = (name) => {
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
    Nome: <span>${rapper.name}</span><br>
    Idade: <span>${rapper.age}</span><br>
    Álbum: <span>${rapper.album}</span><br>
    Single: <span>${rapper.single}</span><br>
    <button onclick="matarRapper('${rapper.name}')">Remover</button><br/>
       `) 
    }

let newRapperDeadHtml = []
for (let i = 0; i < rapperDead.length; i++) {
    const rapper = rapperDead[i];
    newRapperDeadHtml.push(`
    Nome: <span>${rapper.name}</span><br/>
    Idade: <span>${rapper.age}</span><br/>
    Álbum: <span>${rapper.album}</span><br/>
    Single: <span>${rapper.single}</span><br/>
    <button onclick="reviverRapper('${rapper.name}')">Reviver</button><br/>
    `)
}
document.getElementById('listaVivos').innerHTML= newRapperAliveHtml.join("")
document.getElementById('listaMortos').innerHTML= newRapperDeadHtml.join("")
}

const reviveRapper = (name) => {
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
      Nome: <span>${rapper.name}</span><br/>
      Idade: <span>${rapper.age}</span><br/>
      Álbum:<span>${rapper.album}</span><br/>
      Single: <span>${rapper.single}</span><br/>
      <button onclick="matarRapper('${rapper.name}')">Remover</button><br/>
        `)
    }

    let newRapperDeadHtml = []
    for (let i = 0; i < rapperDead.length; i++) {
        const rapper = rapperDead[i]
        newRapperDeadHtml.push(`
        Nome: <span>${rapper.name}</span><br/>
        Idade: <span>${rapper.age}</span><br/>
        Álbum: <span>${rapper.album}</span><br/>
        Single: <span>${rapper.single}</span><br/>
        <button onclick="reviverRapper('${rapper.name}')">Reviver</button><br/>
        `)
    }
    document.getElementById('listaVivos').innerHTML= newRapperAliveHtml.join("")
    document.getElementById('listaMortos').innerHTML= newRapperDeadHtml.join("")
}

window.matarRapper = killRapper
window.reviverRapper = reviveRapper

