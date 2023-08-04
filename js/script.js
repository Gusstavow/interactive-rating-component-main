const conteudoNota = document.querySelector("#aux");
const conteudoAgradecimento = document.querySelector("#aux2")

const btnSubmit = document.querySelector("#submit")

const btnNotas = document.querySelectorAll(".btn-nota")

const res = document.querySelector("#nota-escolhida")

let avaliou = false;

btnSubmit.addEventListener("click", () => {
    //mostrar a tela de agradecimento e esconder a tela atual
    if(avaliou == true){
        conteudoNota.classList.toggle("hidden")
        conteudoAgradecimento.classList.remove("hidden")

    }else{
        alert("Escolha uma das opcoes abaixo antes de enviar.")

    }
   

})

btnNotas.forEach((nota => {
    nota.addEventListener("click", () => {


        res.innerHTML = nota.innerHTML;
        avaliou = true;
        


    })
}))