
const vet = []

function verificar(){
    let numero = document.getElementById('num').value
    let r = document.getElementById('numeros-add')
    let r2 = document.getElementById('resultado')
    var num = Number(numero)
    
    if(numero.length == 0){
        alert('Inicio nao pode ser vazio')
    }
    else if((vet.indexOf(num) == -1) && (num>=1 && num<=100)){
        vet.push(num)
        r.innerHTML+=`<p>Valor ${num} adicionado no vetor</p>`
    }
    else {
        alert('Número invalido ou ja tem numero adicionado no vetor')
    }  
    r2.style.display = 'none' 
}

function final(){
    let r = document.getElementById('resultado')
    let numero = document.getElementById('num').value

    if(numero.length == 0){
        alert('Coloca o número por favor')
    }
    
    r.style.display = 'block'

    var maiorNumero = vet.reduce((a,b) => Math.max(a,b))
    var menorNumero = vet.reduce((a,b) => Math.min(a,b))
    var somaTudo = vet.reduce((a,b) => a+b)


    r.innerHTML = `<p>Ao todo, temos ${vet.length} cadastrado </p>
                   <p>O maior número adicionado é ${maiorNumero}</p>
                   <p>O menor número adicionado é ${menorNumero}</p>
                   <p>Somando todos os número é ${somaTudo}</p> 
                   <p>A média dos valores adicionados é ${(somaTudo/vet.length).toFixed(2)}</p>`

}

