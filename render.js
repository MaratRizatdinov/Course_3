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

//Страница-заглушка (легкий)

export function renderEasyPage({contentElement}){
    let easyPageContent =`<div class="select__container">
                            <h1>Страница с легким уровнем</h1>
                        </div>`;
        contentElement.innerHTML = easyPageContent;        
}

//Страница-заглушка (средний)

export function renderMediumPage({contentElement}){
    let mediumPageContent =`<div class="select__container">
                            <h1>Страница со средним уровнем</h1>
                        </div>`;
        contentElement.innerHTML = mediumPageContent;        
}

//Страница-заглушка (тяжелый)

export function renderHardPage({contentElement}){
    let hardPageContent =`<div class="select__container">
                            <h1>Страница с тяжелым уровнем</h1>
                        </div>`;
        contentElement.innerHTML = hardPageContent;        
}

