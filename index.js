import{renderStartPage , renderEasyPage , renderMediumPage , renderHardPage} from './render.js';
let contentElement = document.querySelector('.container');
let levelOfGame = 0;
window.localStorage.removeItem('level');

renderStartPage({contentElement,levelOfGame});

let startButton = document.querySelector('.select__startbutton');

startButton.addEventListener('click', ()=>{

    if(startButton.disabled == true) {
        alert('Выберите сложность!');   
        return;
    }
    
    levelOfGame = window.localStorage.getItem('level');
    
    switch(levelOfGame){
        case '1' : renderEasyPage({contentElement});
        break;
        case '2' : renderMediumPage({contentElement});
        break;
        case '3' : renderHardPage({contentElement});
        break;
        default : ;
        break;
    }
})






