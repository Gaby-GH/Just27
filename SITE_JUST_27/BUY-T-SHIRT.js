//import fs from "node:fs"
//const fs = require('node:fs')
//import { open } from 'fs/promises' 

//const file = await open('COMMANDE.json', 'a')
//file.write("{'mot': 'NTM'")
//file.close()

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
        const DATA_2 = DATA
        const nom_commande = prenomValue + num_commande
        localStorage.setItem(nom_commande, DATA)
        
        num_commande = num_commande + 1
        localStorage.setItem("num_commande", num_commande)

        const div_deco = document.getElementById("deco")
        div_deco.nextElementSibling.classList.remove("invisible_2")

        const delete_div = document.getElementById("jesupprimemonvoisin")
        delete_div.nextElementSibling.classList.remove("invisible-div")

        //fs.writeFile('COMMANDE.json', DATA_2, {
          //  flag: 'a'
       // })
    }
})