let numeroSecreto= 0;
let intentos = 0;
let listaNumerosSorteados =[]; 
let numeroMaximo= 10; 

function asignarTextoAElemento(elemento,texto){
     let elementoHTML = document.querySelector(elemento);
     elementoHTML.innerHTML= texto;
}

function obtenerNumeroSecreto(){
    let numeroGenerado=  Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoAElemento('p','Ya se sortearon todos los números')
    }else{ 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return obtenerNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;

    }
}
}

function condicionesIniciales(){
    asignarTextoAElemento('h1','¡Juego de Número Secreto!');
    asignarTextoAElemento('p', 'Indica un número del 1 al ' + numeroMaximo);
    numeroSecreto= obtenerNumeroSecreto();
    intentos= 1;
 }

function verificarIntento(){
    let numeroUsuario= parseInt(document.getElementById('valorUsuario').value);  
    if(intentos >3){
        asignarTextoAElemento('p', 'Agotaste los intentos');
       }else{
    if(numeroUsuario === numeroSecreto){
    asignarTextoAElemento('p', `¡Acertaste!. En ${intentos} ${intentos == 1 ? 'vez' : 'veces'} `)
    document.getElementById('reiniciar').removeAttribute('disabled');
}else{
        if(numeroUsuario > numeroSecreto){
            asignarTextoAElemento('p', 'El Número Secreto es menor')
        }else{
            asignarTextoAElemento('p', 'El Número Secreto es mayor')
        }
        intentos ++; 
        limpiarInput()
    } }
   
 }

function limpiarInput(){
     document.querySelector('#valorUsuario').value=''}

function reiniciarJuego(){
    //limpiar el input 
    limpiarInput();
    //Indicar mensaje de intervalo de números 
    //Generar número aleatorio nuevamente 
    //Inicializar el número de intentos 
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();

let lista=[5,6,7,8,4]
let media= calcularPromedio(lista)
function calcularPromedio(lista){
    suma= 0
    for(let i = 0; i<lista.length; i++){
        suma += lista[i];
    }
    return suma/lista.length 
}
console.log(media)