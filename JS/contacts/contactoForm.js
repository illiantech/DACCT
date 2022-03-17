//validaciones de formulario 
console.clear();
const nameUser = document.getElementById('nameAndLastname');
const emailUser = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('btn');
const errorMessage = document.querySelectorAll('.error');
const er =
/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
const errorContainer =  document.querySelector('.mensajeE');
//Eventos 
eventos();
function eventos(){
    document.addEventListener('DOMContentLoaded', iniciarApp);
    nameUser.addEventListener('blur', validarInput);
    emailUser.addEventListener('blur', validarInput);
    mensaje.addEventListener('blur', validarInput);
}


function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('click-dont-alowed');
}

function validarInput(e){
    /* Validamos de que tenga que escribir algo dentro del input */
    if(e.target.value < 1){
       errorMensaje('Todos los campos son obligatorios');
    }else{

    }


    /* Validar el correo */
    if(e.target.type === 'email'){
        if(er.test(e.target.value)){
       
        }else{
           setTimeout(()=>{
            errorMensaje('Debe Ingresar un correo valido');
           },3000)
        }
    }

    if(nameUser.value !== '' && er.test(emailUser.value) && mensaje.value !== ''){
        console.log('formlario listo para enviar');
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('click-dont-alowed');
        btnEnviar.classList.add('click-alowed');
    }


}

function errorMensaje(mensaje){
    LimpiarErrores();
    const p = document.createElement('p')
    p.textContent = mensaje;
    errorContainer.appendChild(p);
    
}

function LimpiarErrores (){
    while(errorContainer.firstChild){
            errorContainer.removeChild(errorContainer.firstChild)
    }
}