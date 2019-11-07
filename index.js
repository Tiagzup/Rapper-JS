

//Método para criar um rapper
const createRapper = () => {
    //Aqui usamos o getElementById pra retornar o DOM elemento que está identificado pelo ID
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const album = document.getElementById("album").value
    const single = document.getElementById("single").value
    //Aqui usamos o push pra inserir os valores na lista.
    rapperAlive.push({
        name,
        age,
        album,
        single
    })
    //Criamos uma lista pra salvar a lista em html
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
    //Aqui pegamos a lista de rappers vivos e retornamos usando o innerHtml. 
    //E o join que vai pegar retornar todos os elementos da Array em uma só string
    document.getElementById('listaVivos').innerHTML=rapperAliveHtml.join("")
}
//Aqui criamos uma array vazia pra salvar os objetos criados acima.
const  rapperList = []
//Aqui atribuimos a lista de objtos a uma lista de rappers vivos.
let rapperAlive = rapperList
//Criamos um lista vazia pra salvar os rappers mortos que virão da lista de rappers vivos.
let rapperDead = []
//Usamos o length para buscar o tamanho do array.
//Aqui executamos a função pra salvar um rapper na lista
const saveRapper = (name) => {
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
     //Função para remover um rapper da lista de vivos.
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
//Aqui criamos uma lista para incluir os rappers mortos
let newRapperDeadHtml = []
//Aqui fazemos a função pra inserir o rapper na lista de mortos
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
//funçao para reviver um rapper.
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

window.matarRapper = saveRapper
window.reviverRapper = reviveRapper

