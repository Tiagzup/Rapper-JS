
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
    <span>${rapper.picture.picture}</span><br>
    <span>${rapper.picture.name}</span><br>
    <span>${rapper.picture.age}</span><br>
    <span>${rapper.picture.album}</span><br>
    <span>${rapper.picture.single}</span><br>
    <button onclick="matarRapper('${rapper.name}')"> Remover</button>
    `)
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
}

/*rapperDead = rapperAlive.map(rapper => `<span>${rapper.picture}</span>
<span>${rapper.name}</span>
<span>${rapper.age}</span>
<span>${rapper.album}</span>
<span>${rapper.single}</span>`
)