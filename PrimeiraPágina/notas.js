localStorage.removeItem("alunosId");
localStorage.removeItem("alunosNomes");
localStorage.removeItem("alunosMedia");
localStorage.removeItem("alunosSituacao");


let id01 = JSON.parse(localStorage.getItem("alunosId")) || [];
var nome01 = JSON.parse(localStorage.getItem("alunosNomes")) || []
let n01 = []
let n02 = []
let mediaNotas = JSON.parse(localStorage.getItem("alunosMedia")) || [];
let situacao = JSON.parse(localStorage.getItem("alunosSituacao")) || [];
let n = 0;

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

    if (isNaN((id))){
        window.alert("Digite o Id do aluno")
    }/*else if (id.length < 5){
        window.alert('O RGM deve ter 5 dígitos')
    }*/else if (nome.trim() === ""){
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

            let mediaAluno = ((n1 + (n2 * 2)) / 3) + (at * 0.2);

            if (mediaAluno > 10){
                mediaAluno = 10;
            }

            let situacao01 = "Aprovado"
            if (mediaAluno < 6){
                situacao01 = "Reprovado"
            }
            situacao.push(situacao01)
            mediaNotas.push(mediaAluno)

            localStorage.setItem('alunosId', JSON.stringify(id01));
            localStorage.setItem('alunosNomes', JSON.stringify(nome01));
            localStorage.setItem('alunosMedia', JSON.stringify(mediaNotas));
            localStorage.setItem('alunosSituacao', JSON.stringify(situacao));

            document.getElementById("formulario").reset()


    }else{
            window.alert('Número de alunos excedido!')
    }

}

function mostrar(){
    window.location.href = "../SegundaPágina/index.html"

}
