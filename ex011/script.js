

function spanUm(){
    document.getElementById("um").innerHTML = "Hello World!";
}

var soma = 1;

function spanDois(){
    document.getElementById("dois").innerHTML = soma;
    soma++;
}

const array = ["Strognoff", "Bife", "Frango"];
var i = 0;
function spanTres(){
    document.getElementById("tres").innerHTML = "[ " + array[i] + "] ";
    i++;

    if(i >= array.length){
        i = 0; // Reset index to loop through the array again
    }
}

var ocultado = false;

function spanQuatro(){
    if(!ocultado){
        document.getElementById("quatro").classList.add("ocultar");
        ocultado = true;
    }else{
        document.getElementById("quatro").classList.remove("ocultar");
        ocultado = false;
    }

    //document.getElementById("quatro").style.display = "none";
}