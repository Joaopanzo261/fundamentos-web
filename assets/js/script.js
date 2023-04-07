let nome = window.document.getElementById("nome")

let email = document.querySelector("#email")

let assunto = document.querySelector("#assunto")

let mapa = document.querySelector('#mapa')

let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() { 

    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
        nomeOk = true

    } else{

        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
    }
}
function validaEmail () {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){

        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
        emailOk = true
    } else {

        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green' 
    }
}
function validaAssunto (){
    let txtAssunto =  document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {

        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color ='red'
        txtAssunto.style.display = 'block'
        assuntoOk = true
    } else {
       
        txtAssunto.innerHTML = 'Texto válido'
        txtAssunto.style.color ='grey'
        txtAssunto.style.display = 'none'

    }

}

function enviar () {
    if(nameOk == true && emailOk == true && assuntoOk == true) {

        alert('Formulário enviado com sucesso!')
    } else{
        alert('Preencha o formulário corretamente antes de enviar...')
    }
}

function mapaZoom (){
    mapa.style.width = '800px' 
    mapa.style.height = '600px'

}

function mapaNormal (){
    mapa.style.width = '600px' 
    mapa.style.height = '450px'


}