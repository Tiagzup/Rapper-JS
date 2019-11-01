
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
    <button onclick="matarRapper('${rapper.name}')"> Remover</button>
    `)
}
document.getElementById('listaVivos').innerHTML=rapperAliveHtml.join(" ");

const killRapper = (name) => {
    console.log('emicida' , name)
    let newRapper = []
    for (let i = 0; i < rapperAlive.length; i++) {
        const rapper = rapperAlive[i];
        if (rapper.name === name) {
            rapperDead.push(rapper)
        } else {
            newRapper.push(rapper)
        }
    }
    rapperAlive = newRapper

    let newRapperHtml = []
    for (let i = 0; i < rapperAlive.length; i++) {
       const rapper = rapperAlive[i];
       newRapperHtml.push(`
       <span>${rapper.picture}</span><br>
    <span>${rapper.name}</span><br>
    <span>${rapper.age}</span><br>
    <span>${rapper.album}</span><br>
    <span>${rapper.single}</span><br>
        <button></button>
       `) 
    }
}








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
        <button onclick="matarRapper('${rapper.name}')" >Remover</button>
        <br/>
        `)
    }
    document.getElementById('listaVivos').innerHTML=rapperAliveHtml.join("")
}

/*rapperDead = rapperAlive.map(rapper => `<span>${rapper.picture}</span>
<span>${rapper.name}</span>
<span>${rapper.age}</span>
<span>${rapper.album}</span>
<span>${rapper.single}</span>`
)