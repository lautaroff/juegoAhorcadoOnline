/* botones*/
var anhade = document.getElementById("guardarPalabra");
                    guardarPalabra.addEventListener("click", dibujargiones);
var anhade = document.getElementById("inicioBoton");
                    inicioBoton.addEventListener("click",dibujargiones);
var anhade = document.getElementById("jugar");
                    jugar.addEventListener("click",dibujargiones);
/* canvas */

var cuadro = document.getElementById("guiones");
var guiones = cuadro.getContext("2d");
var cuadrito = document.getElementById("letrasNo");
var letrado = cuadrito.getContext("2d");
var pantalla = document.getElementById("canvas");
var pincel = pantalla.getContext("2d");

/*funciones de dibujo */


function limpiarCanvas(){
    guiones.strokeStyle ="#F3F5FC";
    guiones.beginPath();
    guiones.moveTo(0,5);
    guiones.lineTo(650,5);
    guiones.stroke();  
    
    pincel.fillStyle = "#F3F5FC";
    pincel.fillRect(0,0,300,400);
    letrado.fillStyle = "#F3F5FC";
    letrado.fillRect(0,0,470,100);
    
}

function dibujarhorca(erroress, aciertoss){
    pincel.strokeStyle = "#0A3871";
    pincel.fillStyle = "#0A3871";
    pincel.lineCap = "round";
    pincel.lineJoin = "round"
    pincel.lineWidth= 8;
    
    pincel.beginPath();
    pincel.moveTo(5,380);
    pincel.lineTo(255,380);
    pincel.stroke();   

    if(aciertoss < palabraSecreta.length){
        
    if (erroress <9){
        pincel.beginPath();
        pincel.moveTo(50,380);
        pincel.lineTo(50,20);
        pincel.stroke();
    }
    if (erroress <8){
        pincel.beginPath();
        pincel.moveTo(50,20);
        pincel.lineTo(250,20);
        pincel.stroke();
    }
    if (erroress <7){
        pincel.beginPath();
        pincel.moveTo(250,20);
        pincel.lineTo(250,60);
        pincel.stroke();

    }
    if (erroress <6){
        pincel.beginPath();
        pincel.arc(250 , 90, 35 ,0 , 2*Math.PI);
        pincel.fill();
    

    }
    if (erroress <5){
        pincel.beginPath();
        pincel.moveTo(250,120);
        pincel.lineTo(250, 240);
        pincel.stroke();

    }
    if (erroress <4){
        pincel.beginPath();
        pincel.moveTo(250,130);
        pincel.lineTo(210, 200);
        pincel.stroke();

    }
    if (erroress <3){
        pincel.beginPath();
        pincel.moveTo(250,130);
        pincel.lineTo(290, 200);
        pincel.stroke();

    }
    if (erroress <2){
        pincel.beginPath();
        pincel.moveTo(250,236);
        pincel.lineTo(210, 300);
        pincel.stroke();
        
    }
    if (erroress <1){
        pincel.beginPath();
        pincel.moveTo(250,236);
        pincel.lineTo(290, 300);
        pincel.stroke();
    }
    if(erroress == 0){
        pincel.font = "bold 40px inter";
        pincel.lineCap = "round";
        pincel.lineJoin = "round";
        pincel.lineWidth= 8;
        pincel.fillStyle = "#0A3871";
        pincel.fillText("perdiste :(", 56, 150);
    }
    

    }

}




function dibujargiones(){
    
    guiones.strokeStyle = "#0A3871";
    guiones.fillStyle = "#0A3871";
    guiones.lineCap = "round";
    guiones.lineJoin = "round"
    guiones.lineWidth= 8;
    let anchura = 650/palabraSecreta.length
    guiones.beginPath()
    for (let i = 0; i < palabraSecreta.length; i++) {

        guiones.moveTo(15 + (anchura*i), 5);
        guiones.lineTo(65 + (anchura*i), 5);
        
    }
    guiones.stroke();
    guiones.closePath();
}



function dibujarLetrasErroneas(letras, errorLeft, aciertoss){
    if (aciertoss < palabraSecreta.length-1){
    letrado.font = "bold 40px inter";
    letrado.lineCap = "round";
    letrado.lineJoin = "round";
    letrado.lineWidth= 8;
    letrado.fillStyle = "#0A3871";
    letrado.fillText(letras, 30+(40*(10-errorLeft)), 50, 40);
    }
}

function ganar(aciertoss, errores){
    if(aciertoss > palabraSecreta.length-1 && errores > 0 ){
        pincel.font = "bold 40px inter";
        pincel.lineCap = "round";
        pincel.lineJoin = "round";
        pincel.lineWidth= 8;
        pincel.fillStyle = "#0A3871";
        pincel.fillText("Ganaste :)", 56, 150);
    }
}




