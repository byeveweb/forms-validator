import { InputValidator } from './modules/inputValidator.js'
import {  User } from './UserObject.js'



//Variables
const singupForm = document.querySelector('#signup')

const usernameInput = document.querySelector('#username')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const passwordConfirmInput = document.querySelector('#passwordconfirm')
const checkPolicityInput = document.querySelector('#checkpolicity')


const button = document.querySelector('#enviar')

const userObjecto = new User('Eva', 'mail')
console.log(userObjecto)


const userObj = {
    username
}




//Functions Hooks
eventListeners()

//Events Listeners
function eventListeners() {

    //Read Input Value
    usernameInput.addEventListener('blur', (e, o) => inputValidatorEvent(e.target, userObj))
    emailInput.addEventListener('blur', (e, o) => inputValidatorEvent(e.target, userObj))
    passwordInput.addEventListener('blur', (e, o) => inputValidatorEvent(e.target, userObj))
    passwordConfirmInput.addEventListener('blur', (e, o) => inputValidatorEvent(e.target, userObj))
    checkPolicityInput.addEventListener('change', (e, o) => inputValidatorEvent(e.target, userObj))

    //Send Input Value 
    // singupForm.addEventListener('submit', sendDataNewUser)
}


//Object Fill Input Function
function inputValidatorEvent(e, o) {

    /*
         LÓGICA: 
             - Validar el input si está vacio o no
             - Validar la información que entrega según usuabilidad
             - Llenar el objeto que será entregado
             ---
             El botón no se habilitará si el objeto está correctamente rellenado.

         UI: 
             - Pintar alerta de error en caso de que no pase la validación
             - Pintar el campo según validación
         
    */

    //Leemos el div error
    const alertError = document.querySelector(`input[name=${e.name}`).nextSibling



    //1º Instanciamos la clase inputValidator
    const inputValidatorClass = new InputValidator(alertError, e.type, e.name, e.value, e.checked)

    //2º Llamamos a la función de Validator
    inputValidatorClass.inputValidatorFunction(e.name)











}