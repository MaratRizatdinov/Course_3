//Стартовая страница

export function renderStartPage({contentElement,levelOfGame}){
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
                window.localStorage.removeItem('level');
                window.localStorage.setItem('level', key.textContent);
                levelOfGame = window.localStorage.getItem('level');
                startButton.disabled=false;
                startButton.classList.remove('select__startbutton--disabled');
            });
        }

        startButton.addEventListener('click', ()=>{
            if(startButton.disabled == true) {
                alert('Выберите сложность!');   
                return;
            }
            console.log(levelOfGame);
        })



}