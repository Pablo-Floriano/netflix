



let botaosom = document.querySelector(".botaosom")
let video = document.querySelector(".vide")
let link2 = document.querySelector(".link2")
let modal = document.querySelector(".modal")




botaosom.addEventListener("click",ligarsom)

function ligarsom(){
    video.muted= false
}


link2.addEventListener("click",aparecermodal)

function aparecermodal(){
    modal.style.display="block"
}

modal.addEventListener("click",fecharmodal)

function fecharmodal(){
    modal.style.display="none"
}