//validaciones de formulario 

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

//eventos 

name.addEventListener('blur', validateName);
email.addEventListener('blur', validateName);
message.addEventListener('blur', validateName);

//Funcion de validacion 
