//const {writeFile} = require('node:fs/promises')

let tshirt_color = localStorage.getItem("t-shirt-color")
let image_representative = document.getElementById("img-t-shirt")

console.log(tshirt_color)

if (tshirt_color == "blanc"){
    image_representative.src = "CR-t-shirt-blanc.png"
}else if (tshirt_color == "noir"){
    image_representative.src = "CR-t-shirt-noir.png"
}

const formulaire = document.getElementById("formulaire")
const prenom = document.getElementById("input-prenom")
const size = document.getElementById("select-size")

formulaire.addEventListener("submit", function(e){
    e.preventDefault()

    const prenomValue = prenom.value.trim()
    const sizeValue = size.value.trim()

    if (prenomValue.length == 0){
        prenom.nextElementSibling.classList.remove("invisible")
        console.log("Veuillez renseigner un prénom")
    }else {
        console.log(prenomValue, "prenom")
        console.log(sizeValue, "size")
        prenom.nextElementSibling.classList.add("invisible")
        console.log("Commande réussie !")
        
        // SAVE IN LOCALSTORAGE
        let num_commande = localStorage.getItem("num_commande")

        let DATA = {"prenom": prenomValue, "size": sizeValue, "color": tshirt_color}
        DATA = JSON.stringify(DATA)
        const nom_commande = prenomValue + num_commande
        localStorage.setItem(nom_commande, DATA)
        
        // SAVE IN JSON FILE
        //let DATA_2 = {"prenom": prenomValue, "size": sizeValue, "color": tshirt_color, "num_commande": num_commande}
        
        //writeFile('COMMANDE.json', JSON.stringify(DATA_2), {
          //flag: 'a'
        //})
        
        num_commande = num_commande + 1
        localStorage.setItem("num_commande", num_commande)

        const div_deco = document.getElementById("deco")
        div_deco.nextElementSibling.classList.remove("invisible_2")
    }
})