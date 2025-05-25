var id01 = []
var nome01 = []
var n01 = []
var n02 = []
var mediaNotas = []
var situacao = []

function media(){
    var id = parseInt(window.document.getElementById("id").value)
    var nome = window.document.getElementById("nome").value 
    var n1 = parseFloat(window.document.getElementById("n1").value)
    var n2 = parseFloat(window.document.getElementById("n2").value)
    var ninput = document.getElementById("num");
    var n = parseInt(ninput.value) || 0;
    var res = window.document.getElementById("resultado")

    if (isNaN((id))){
        window.alert("Digite o Id do aluno")
    }else if (nome.trim() === ""){
        window.alert("Digite o nome do Aluno")
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

            var mediaAluno = (n1+n2)/2

            var situacao01 = "Aprovado"
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