let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')


nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}

function validaEmail() {
    let txtemail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
    txtEmail.innerHTML = 'E-Mail inválido'
    txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'E-Mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

        if (assunto.value.length > 100) {
            txtAssunto.innerHTML = '<span>Texto no máximo 100 caracteres</span>'
            txtAssunto.style.color = 'red'
            txtAssunto.style.display = 'block'
        }else {
            txtAssunto.style.display = 'none'
            assuntoOk = true
        }
    
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado!')
    }else {
        alert('Formulário invalido')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal (){
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}