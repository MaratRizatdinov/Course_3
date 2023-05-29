//Стартовая страница

export function renderStartPage({contentElement}){
    let selectPageContent =`<div class="select__container">
                            <div class="select__title">Выбери сложность</div>
                            <div class="select__levelsbox">
                                <div class ="select__levelbutton">1</div>
                                <div class="select__levelbutton">2</div>
                                <div class="select__levelbutton">3</div>
                            </div>     
                            <div class="select__startbutton select__startbutton--disabled">Старт</div>       
                        </div>`;
        contentElement.innerHTML = selectPageContent;

        let buttonElements =document.querySelectorAll('.select__levelbutton');
        let startButton =document.querySelector('.select__startbutton');
        startButton.disabled=true;



        for(let key of buttonElements){
            
            key.addEventListener('click',()=>{
                for(let key of buttonElements){
                    key.classList.remove('select__levelbutton--active');    
                }        
                key.classList.add('select__levelbutton--active');
                window.localStorage.setItem('level', key.textContent);
                startButton.disabled=false;
                startButton.classList.remove('select__startbutton--disabled');
                
            });
        }
}

//Страница-загрузка игры

export function renderGamePage({contentElement}){
    
    
    let gamePageItems =``;
    let level;
        
    let gameCards = JSON.parse(window.localStorage.getItem('gameCardCollection'));

    for (let key of gameCards){
        gamePageItems = gamePageItems + 
        `<div class ='card__items'>
            ${key}
        </div>`;
    }

    if (gameCards.length==6) level='easy';
    if (gameCards.length==12) level='medium';
    if (gameCards.length==18) level='hard';

    let gamePageContent =`<div class = "card__container card__container--${level}">${gamePageItems}</div>`;
    

    contentElement.innerHTML = gamePageContent;   
}


