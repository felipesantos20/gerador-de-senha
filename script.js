// Buscando Elemento pelo ID
let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#valor');
let password = document.querySelector('#password');

let containerPassword = document.querySelector("#container-password");
// <--------------------------------------------------------------------->
// caracteres que podem ser usadas para gerar a senha
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@';
let novaSenha = "";
// <--------------------------------------------------------------------->
// Interação do tamanho da senha
sizePassword.innerHTML = sliderElement.value;
// <--------------------------------------------------------------------->
// Modificar valores do tamanho da senha
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}
// <--------------------------------------------------------------------->
// Função para gerar a senha
function generatePassword (){
//Enquanto a quantidade de caracteres for menor que o i ele buscara uma nova caractere aleatoria.   
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        //Gerando um numero aleatorio e adicionando na variavel pass
        pass += charset.charAt(Math.floor(Math.random() *n))
    }
//removendo o hide fazendo aparecer a senha gerada
    containerPassword.classList.remove('hide')
//Inserindo a senha no HTML
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword() {
    alert('Sua senha foi copiada com sucesso!')
//Copiar oque estiver dentro dessa variavel
    navigator.clipboard.writeText(novaSenha)
}