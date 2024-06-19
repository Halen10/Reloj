const hora = document.querySelector(".hora");
const minuto = document.querySelector(".min");
const segundo = document.querySelector(".seg");
const ampm = document.querySelector(".ampm");

function tiempo(){
    const fecha = new Date();
    validarHora(fecha);
    validarMinuto(fecha);
    validarSegundo(fecha);
}
function validarHora(fecha){
    if(fecha.getHours() >= 12){
        if(fecha.getHours() < 10){
            hora.innerHTML = "0" + fecha.getHours();
        }
        else{
            hora.innerHTML = "0" + (fecha.getHours() - 12);
        }

        ampm.innerHTML = "PM";
    }else{
        if(fecha.getHours() < 10){
            hora.innerHTML = "0" + fecha.getHours();
        }
        else{
            hora.innerHTML = "0" + (fecha.getHours() - 12);
        }
        ampm.innerHTML = "AM";
    }
}
function validarMinuto(fecha){
    if(fecha.getMinutes() < 10){
        minuto.innerHTML = "0" + fecha.getMinutes();
    }else{
        minuto.innerHTML = fecha.getMinutes();
    }
}
function validarSegundo(fecha){
    if(fecha.getSeconds() < 10){
        segundo.innerHTML = "0" + fecha.getSeconds();
    }
    else{
        segundo.innerHTML = fecha.getSeconds();
    }
}


setInterval(tiempo, 1000)