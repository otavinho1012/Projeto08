

export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),
    // poderia ser um 
    // open: function(){}   
    open() {
        Modal.wrapper.classList.add('open')
    },
    close() {
        Modal.wrapper.classList.remove('open')
    }
}

// tambem dá para fazer por addAdventListener
Modal.button.onclick = () => {
    //jeito mais básico de fazer =   modalWrapper.classList.remove('open')
    Modal.close()
}

//Adicionando a saída pela tecla esc
window.addEventListener('keyDown', handleKeydown)

function handleKeydown(event){
    // se eu cliclar no ESC..
    if(event.key === 'Escape'){
        Modal.close()
    }

}