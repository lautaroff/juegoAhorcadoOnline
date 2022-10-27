
var anhade = document.getElementById("guardarPalabra");
                    guardarPalabra.addEventListener("click",anhadirPalabra,juegoNuevo,reiniciarJuego);
var ini = document.getElementById("inicioBoton");
                    inicioBoton.addEventListener("click",juegoNuevo,reiniciarJuego);
var jugo = document.getElementById("jugar");
                    jugar.addEventListener("click",reiniciarJuego);

var palabras = ["PANTALON", "CAMELLO", "HORMIGA", "JAVASCRIPT", "VEGANO","FUEGO","PLUTON","PASILLO","CAMINO","HOROSCOPO","ROLLO","ESCOPETA"];


let palabraSecreta = ""; 
let letrasErroneas = [];
let errores = 9;
let aciertos = 0;



function anhadirPalabra(){
    let palabraAnhadir = document.getElementById("agregarPalabra").value.toUpperCase();
    if (palabraAnhadir != ""){
        palabras.push(palabraAnhadir);
        if (palabras[palabras.length-1] == palabras[palabras.length-2] ) {
            palabras.pop()
        }
    }  
    juegoNuevo()
    elegirPalabraSecreta()
    reiniciarJuego()
    generadorInput()
} 



function elegirPalabraSecreta(){
    if(palabras.length >= 13){
        palabraSeleccionada = palabras[palabras.length-1]
        
    }else{
        palabraSeleccionada = palabras[Math.round(Math.random()*(palabras.length-1))];
        
    }
    return palabraSeleccionada

}

palabraSecreta = elegirPalabraSecreta()

function generadorInput(){
let  inputo = '<input type="text" id="p0" class="line"/>';
let pixelesNo = 45* palabraSecreta.length

let anchura = (650- pixelesNo)/palabraSecreta.length
for (let posicion = 1; posicion < palabraSecreta.length; posicion++) {

    inputo = inputo + '<input type="text" id="p'+posicion+'" class="line"/ style="margin-left:'+(anchura)+'px;">'
    
}
document.getElementById("palabraMostrada").innerHTML = inputo
}



function comprobarLetra(key){
    

    let validador = false;
        if (key >= 65 && letrasErroneas.indexOf(key) || key <= 90 && letrasErroneas.indexOf(key)){
            letrasErroneas.push(key)
            return validador
            
            

        }else{
            validador = true;
            return validador}
        

}

function comprobarErrores(){
    errores = errores-1;
}

function juegoNuevo(){
    
    elegirPalabraSecreta()
    
    generadorInput()
    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase()
        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let init = 0;init <= palabraSecreta.length; init++) {
                if(letra == palabraSecreta[init]) {
                    document.getElementById("p" + init).value = letra.toUpperCase()
                    aciertos++;
                }
               
            }
        }else{
            comprobarErrores(letra)
            dibujarLetrasErroneas(letra, errores,aciertos)
            dibujarhorca(errores, aciertos)
            ganar(aciertos, errores)
        }
        
    }
    
}


function reiniciarJuego(){
    palabraSecreta = ""; 
    letrasErroneas = [];
    errores = 9;
    aciertos = 0;
    reiniciarJuego2()
}

function reiniciarJuego2(){
    elegirPalabraSecreta()
    palabraSecreta = elegirPalabraSecreta()
    generadorInput()
    limpiarCanvas()
    return palabraSecreta
}






