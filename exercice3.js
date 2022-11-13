//interagir avec le package
const prompt = require("prompt-sync")();

function nombreadd() {
    //choissir nombre
    let inputNumber = prompt("Choisissez votre nombre : ");
    //transformer la chaine de caractères en nombre
    let inputToInt = parseInt(inputNumber)

    if(isNaN(inputToInt)){
        console.log("Ce n'est pas un chiffre")
        nombreadd()
    }else{
        let maxNumber = inputToInt + 10
        for(let i = 0; inputToInt != maxNumber; i++){
            inputToInt++;
            console.log(inputToInt);
        }
    }
}
 
nombreadd();