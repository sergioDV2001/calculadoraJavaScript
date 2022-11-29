var uno = 0; //delcaro las variables 
var dos = 0; 
var op = ""; 
var leer = true; 
var oper = false; 

function número(num){
    
    if(document.getElementById("txt_pantalla").value.length < 20){
        if(!leer)
        {
            document.getElementById("txt_pantalla").value = 0;
            leer = true;
        }

        if(num == "0" && document.getElementById("txt_pantalla").value == "0") //si el primer numero que mete es 0 y en la pantalla esta el 0 no se imprime
            document.getElementById("txt_pantalla").value = 0;


        else if(num == "0")                                             // si mete un 0 se añade detras de los numeros
            document.getElementById("txt_pantalla").value += "0";
            
            
        else if(document.getElementById("txt_pantalla").value == "0")   // si mete un numero que no es 0 borra y mete el numero
            document.getElementById("txt_pantalla").value = num;


        else                                                            // else se añade el numero
            document.getElementById("txt_pantalla").value += "" + num;
    }

    if(op == "="){ // si pulsa el igual se desabilita hasta que no entre en la funcion operacion
        oper = false;
    }
}


function operación(signo) { //funcion operacion que cuando pulsa el boton de la operacion devuelve el valor a una variable y la guarda 

    op = signo;

    uno = parseFloat(document.getElementById("txt_pantalla").value);

    document.getElementById("punto").disabled = false;

    

    if(leer==true && oper==true){// si se cumple las condiciones empieza a operar 

        operación2();

    }
    

    leer = false;
    oper = true;		
}


function operación2() { //funcion que hace las operaciones pertinentes dependiendo del boton que pulse con un switch 

    switch(op){

        case "+": 
            dos = uno + parseFloat(document.getElementById("txt_pantalla").value); 
        break;

        case "-": 
            dos = uno - parseFloat(document.getElementById("txt_pantalla").value); 
        break;

        case "*": 
            dos = uno * parseFloat(document.getElementById("txt_pantalla").value); 
        break;

        case "/": 
        dos = uno / parseFloat(document.getElementById("txt_pantalla").value); 
        break;

        case "porcent": 
        dos = parseFloat(document.getElementById("txt_pantalla").value) / 100 ; 
        break;

        case "raiz": 
        dos = Math.sqrt(parseFloat(document.getElementById("txt_pantalla").value)) ; 
        break;

        case "raizcub": 
        dos = Math.cbrt(parseFloat(document.getElementById("txt_pantalla").value)) ; 
        break;

        case "cuadrado": 
        dos = Math.pow(parseFloat(document.getElementById("txt_pantalla").value), 2); 
        break;

        case "cubo": 
        dos = Math.pow(parseFloat(document.getElementById("txt_pantalla").value), 3); 
        break;

        case "elevadon": 
        dos = Math.pow(uno, parseFloat(document.getElementById("txt_pantalla").value));
        break;

        case "cos": 
        dos = Math.cos(parseFloat(document.getElementById("txt_pantalla").value));  
        break;

        case "sin": 
        dos = Math.sin(parseFloat(document.getElementById("txt_pantalla").value)); 
        break;

        case "tan": 
        dos = Math.tan(parseFloat(document.getElementById("txt_pantalla").value)); 
        break;

        case "elevadon": 
        dos = Math.pow(uno, parseFloat(document.getElementById("txt_pantalla").value)); 
        break;

        case "loga10": 
        dos = Math.log10(parseFloat(document.getElementById("txt_pantalla").value)); 
        break;

        case "loga":
        dos = Math.log(parseFloat(document.getElementById("txt_pantalla").value)); 
        break;

        case "expo": 
        dos = Math.exp(parseFloat(document.getElementById("txt_pantalla").value)); 
        break;

        case "atan": 
        dos = Math.atan(parseFloat(document.getElementById("txt_pantalla").value)); 
        break;

        case "=":  
        dos = document.getElementById("txt_pantalla").value; 
        break;

        default: dos = 0;
    }

    if (isNaN(dos)) {
        dos = 0
    }
    
    document.getElementById("txt_pantalla").value = dos;
}

function resultado() {  // funcion resultado que muestra el resultado por pantalla y vuelve las variables a las a su estado original

    operación2();

    document.getElementById("txt_pantalla").value = dos;

    op = "=";
    leer = false;
    document.getElementById("punto").disabled = false;
    document.getElementById("constante").disabled = false;
    dos = 0;
}

function borrar(){ //funcion borrar para eliminar elementos de la pantalla
    if(document.getElementById("txt_pantalla").value.length == 1){ //si se cumple la condicion se borra el elemento y el valor vuelve a 0

        document.getElementById("txt_pantalla").value = 0;
        document.getElementById("punto").disabled = false;

    }else{ // else elimina hasta que el usuario quiera 

        var tmp = "";

        for(var i = 0; i < document.getElementById("txt_pantalla").value.length - 1; i++){

            tmp += document.getElementById("txt_pantalla").value[i];
            
            
        }
        if ( document.getElementById("txt_pantalla").value[i] === ".") {
            document.getElementById("punto").disabled = false;
        }

        if(tmp == "-"){ // si el numero es negativo y hay un pantalla un menos el valor es 0
            tmp = "0";
        }

        

        document.getElementById("txt_pantalla").value = tmp;

    }
}

function negativo() { // funcion para poner los numeros negativos, simplemente se multiplica por -1 el numero de la pantalla 

    num = parseFloat(document.getElementById("txt_pantalla").value)  * -1; 
    document.getElementById("txt_pantalla").value = num;
    
}




function limpiar() { //funcion limpiar que limpia toda la pantalla 
    document.getElementById("txt_pantalla").value = 0;
    document.getElementById("punto").disabled = false;
}

function punto() { //funcion punto que mete los puntos en las variables

    if(document.getElementById("txt_pantalla").value.indexOf(".") >= 0 && (leer == false || op != "") && oper==false){   //si ya hay uno se sale de la funcion 
        
        return	
    
    }else if(leer==true){   //si se cumple la condicion añade el punto y se deshabilita el boton
            document.getElementById("txt_pantalla").value += ".";
            document.getElementById("punto").disabled = true;
            
        }else{ 

            document.getElementById("txt_pantalla").value = "0.";
            leer = true;

        }
}