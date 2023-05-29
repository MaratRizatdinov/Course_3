import{renderStartPage , renderEasyPage , renderMediumPage , renderHardPage} from './render.js';
import{createRandomCardCollection} from './tools.js';
let contentElement = document.querySelector('.container');
let levelOfGame;
let gameCardCollection;

window.localStorage.removeItem('level');
window.localStorage.removeItem('gameCardCollection');

renderStartPage({contentElement});

let startButton = document.querySelector('.select__startbutton');

startButton.addEventListener('click', ()=>{

    if(startButton.disabled == true) {
        alert('Выберите сложность!');   
        return;
    }

    levelOfGame = window.localStorage.getItem('level');
    
    createRandomCardCollection({levelOfGame});
    gameCardCollection = JSON.parse(window.localStorage.getItem('gameCardCollection'));
    console.log(gameCardCollection);
    
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








