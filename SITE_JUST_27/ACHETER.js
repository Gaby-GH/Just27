// STOCKER ICI QUELLE COULEUR A ETE CHOISI PAR L UTILISATEUR

const color_black = document.getElementById("btn-buy-noir")
const color_white = document.getElementById("btn-buy-blanc")

color_black.addEventListener("click", function(){
    localStorage.setItem("t-shirt-color", "noir")
})

color_white.addEventListener("click", function(){
    localStorage.setItem("t-shirt-color", "blanc")
})