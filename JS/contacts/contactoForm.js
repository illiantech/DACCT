//validaciones de formulario 

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

//eventos 

name.addEventListener('blur', validateName);
email.addEventListener('blur', validateName);
message.addEventListener('blur', validateName);

//Funcion de validacion 
function validateName(e){
 const countLettersInputs = e.target.value.length;
 if(countLettersInputs < 1){
     e.target.style.border = '2px solid red'
 }else{
    e.target.style.border = '2px solid green'
 }





}