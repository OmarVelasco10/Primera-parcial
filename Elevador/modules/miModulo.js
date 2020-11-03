var statusPuerta=0;
var pisoActual=1;
var pisosTotales=6;

function cerrarPuerta(){

    statusPuerta=0;
}

function abrirPuerta(){

    statusPuerta=1;
}

function irAPiso(x){

    cerrarPuerta();
    if(x<=pisosTotales){
        if(x>pisoActual){
            pisoActual=0;
            for(var i=0;i<x;i++){
                subirPiso();
            }
            abrirPuerta();
        }
        else{
            while(x<pisoActual){
                bajarPiso();
            }
            abrirPuerta();
        }
    }

}

function subirPiso(){

    if(statusPuerta==0){
        pisoActual++;
}
}

function bajarPiso(){

    if(statusPuerta==0){
        pisoActual--;
    }

}

function status() {

    if(statusPuerta==0){
         return console.log("La puerta esta cerrada y el piso actual es: " + pisoActual);
    }
    else{
        return console.log("La puerta esta abierta y el piso actual es: " + pisoActual);
    }

    
}

module.exports={
    cerrarPuerta:cerrarPuerta,
    abrirPuerta:abrirPuerta,
    irAPiso:irAPiso,
    status:status
};