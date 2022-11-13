function inverser(mot){


    var decomposition = mot.split(""); 
    var inversement = decomposition.reverse(); 


    var nouveaumot = inversement.join(""); 
    console.log(nouveaumot)

    return nouveaumot;
    }
    


    inverser("ordinateur")
