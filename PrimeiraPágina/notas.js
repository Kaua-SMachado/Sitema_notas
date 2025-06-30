let id01 = []
var nome01 = []
let n01 = []
let n02 = []
let mediaNotas = []
let situacao = []
let n = 0

document.addEventListener('DOMContentLoaded', ()=>{
    bntEnviar = document.getElementById('media');
    bntEnviar.addEventListener('click', function(event01){
        event01.preventDefault();
        media();
    })
})

document.addEventListener('DOMContentLoaded', ()=>{
    bntMostrar = document.getElementById('mostrar');
    bntMostrar.addEventListener('click', function(event02){
        event02.preventDefault();
        mostrar()
    })
})

function media(){
    let id = parseInt(window.document.getElementById("id").value)
    let nome = window.document.getElementById("nome").value 
    let at = parseInt(window.document.getElementById('atividade').value)
    let n1 = parseFloat(window.document.getElementById("n1").value)
    let n2 = parseFloat(window.document.getElementById("n2").value)
    let ninput = document.getElementById("num");
    let res = window.document.getElementById("resultado")

    if (isNaN((id))){
        window.alert("Digite o Id do aluno")
    }else if (nome.trim() === ""){
        window.alert("Digite o nome do Aluno")
    } else if (isNaN(at)){
        window.alert('Digite a quantidade de atividades feita')
    } else if (isNaN((n1))){
        window.alert("Digite a nota da M1 do aluno")
    } else if (isNaN((n2))){
        window.alert('Digite a nota da M2 do aluno')
    } else if(id01.includes(id)){
        window.alert("Id já cadastrado!")
    }else if ((n1 < 0 || n1 > 10) || (n2 < 0 || n2 > 10)){
        window.alert("Nota inválida")
    }else if (n <= 16){
            window.alert("Aluno(a) cadastrado(a) com sucesso!!")
            n++
            ninput.value = n
            ninput.innerHTML = n

            id01.push(id)
            nome01.push(nome)
            n01.push(n1)
            n02.push(n2)

            let mediaAluno = (n1+(n2*2)/3)+(at*0.2)

            let situacao01 = "Aprovado"
            if (mediaAluno < 6){
                situacao01 = "Reprovado"
            }
            situacao.push(situacao01)
            mediaNotas.push(mediaAluno)

            coluna = document.createElement("tr")

            createId = document.createElement("td")
            createId.innerHTML = id01[n - 1]

            createNome = document.createElement("td")
            createNome.innerHTML = nome01[n-1]

            createmediaaluno = document.createElement("td")  
            createmediaaluno.innerHTML = mediaAluno.toFixed(2)

            createSituacao = document.createElement("td")
            createSituacao.innerHTML = situacao01
            createSituacao.setAttribute("data-status", situacao01);
            
            res.appendChild(coluna)
            coluna.appendChild(createId);
            coluna.appendChild(createNome)
            coluna.appendChild(createmediaaluno)
            coluna.appendChild(createSituacao)

            document.getElementById("formulario").reset()

    }else{
            window.alert('Número de alunos excedido!')
    }

}

function mostrar(){
    window.location.href = "../SegundaPágina/index.html"
}
