import { Modal } from "./modal"
import { alertError as errinho } from "./alertError"
import { IMC, notANumber } from "./utils"
//acho que essa aula consiste muito em encapsulamento

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight').value
const inputHeight = document.querySelector('#height').value

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')

//objeto literal. isso ajuda

// pelo submit você pode fazer diversas validaçõoes validações 
form.onsubmit = (event) => {
    console.log("porra  ") 
    event.preventDefault()

    const alertError =  notANumber(inputWeight) || notANumber(inputHeight) 

    if(alertError){
        errinho.open()
        return;
    }

    const result = IMC(inputWeight, inputHeight)
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message
    //jeito mais básico de fazer = modalWrapper.classList.add('open')
    Modal.open()
  
}






/*EsModules - import e export
    serve para dividir o código em vários trechos
    e disponibiliza dados entre qualquer arquivos
*/
