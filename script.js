 /*window.alert("Hello")

 function printar(){
     window.alert("Hello again")
 }
 printar()
*/


//executa a função ao carregar a página
// window.onload = function carregarPagina (){
//     alert('Hello')
// }


// addEventListener.DOMContentload


function logar(){
   //redireciona o usuario ->
   //window.location.href = "https://www.google.com.br/"
   //recarrega a página ->
   //window.location.reload()
   //volta para a página anterior ->
   //window.history.back()
   //avança para a próxima página
   //window.history.forward()


   //executa uma função depois de x tempo 
    // setTimeout(function mensagem(){
    //     alert("Compre Agora!")
    // }, 3000)



    // setInterval(function mensagem(){
    //     console.log("Rodouuuu!")
    // }, 2000)


    //querySelector - seleciona 
   var paragrafo = document.querySelector("#resultado") 
    //paragrafo.innerHTML = "FIAP"

   var cardapio = document.querySelector("#cardapio").value

   switch(cardapio){
    case 'cafe':
        paragrafo.innerHTML = `
        <h1>Café da manhã</h1
        <p>Pão com Nutella</p>
        <a href="#"> Compre agora </a>
        `
        break;
    case 'almoco':
        paragrafo.innerHTML = "Mc Donalds"
        break;
    case 'jantar':
        paragrafo.innerHTML = "Pizza"
        break;
    default:
        paragrafo.innerHTML = "Opção inválida!"
   }
}

function trocarImagem() {

    var imagem = document.querySelector("#imagem");
    var botao = document.querySelector("#btnImagem")
    imagem.src = "https://cdn-icons-png.flaticon.com/512/4139/4139062.png"
    imagem.width = "200"

    //botao.style.backgroundColor = "blue"
    botao.classList.toggle("active")
}



