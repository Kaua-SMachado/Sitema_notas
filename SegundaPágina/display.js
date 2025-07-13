document.addEventListener('DOMContentLoaded', ()=>{
    const res = document.querySelector('#resultado')

    const id = JSON.parse(localStorage.getItem('alunosId')) || [];
    const nome = JSON.parse(localStorage.getItem('alunosNomes')) || []
    const mediaNotas = JSON.parse(localStorage.getItem('alunosMedia')) || [];
    const situacao = JSON.parse(localStorage.getItem('alunosSituacao')) || [];

    res.innerHTML = "";

    for (let i = 0; i < id.length; i++){
        let coluna = document.createElement("tr")

        let createId = document.createElement("td")
        createId.innerHTML = id[i]

        let createNome = document.createElement("td")
        createNome.innerHTML = nome[i]

        let createmediaaluno = document.createElement("td")  
        createmediaaluno.innerHTML = mediaNotas[i].toFixed(2)

        let createSituacao = document.createElement("td")
        createSituacao.innerHTML = situacao[i]
        createSituacao.setAttribute("data-status", situacao[i]);
                    
        res.appendChild(coluna)
        coluna.appendChild(createId);
        coluna.appendChild(createNome)
        coluna.appendChild(createmediaaluno)
        coluna.appendChild(createSituacao)
            }

})









