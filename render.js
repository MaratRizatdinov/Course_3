//Стартовая страница

export function renderStartPage({ contentElement }) {
    let selectPageContent = `<div class="select__container">
                            <div class="select__title">Выбери сложность</div>
                            <div class="select__levelsbox">
                                <div class ="select__levelbutton">1</div>
                                <div class="select__levelbutton">2</div>
                                <div class="select__levelbutton">3</div>
                            </div>     
                            <div class="select__startbutton  global__button global__button--disabled">Старт</div>       
                        </div>`;
    contentElement.innerHTML = selectPageContent;

    let buttonElements = document.querySelectorAll(".select__levelbutton");
    let startButton = document.querySelector(".select__startbutton");
    startButton.disabled = true;

    for (let key of buttonElements) {
        key.addEventListener("click", () => {
            for (let key of buttonElements) {
                key.classList.remove("select__levelbutton--active");
            }
            key.classList.add("select__levelbutton--active");
            window.localStorage.setItem("level", key.textContent);
            startButton.disabled = false;
            startButton.classList.remove("global__button--disabled");
        });
    }
}

//Страница-загрузка игры

export function renderGamePage({ contentElement }) {
    let gamePageItems = ``;
    let fullGamePageItems = ``;
    let level;

    let gameCards = JSON.parse(
        window.localStorage.getItem("gameCardCollection")
    );

    if (gameCards.length === 6) level = "easy";
    if (gameCards.length === 12) level = "medium";
    if (gameCards.length === 18) level = "hard";

    let fullGameCards = JSON.parse(
        window.localStorage.getItem("fullCardCollection")
    );

    for (let key of gameCards) {
        gamePageItems =
            gamePageItems +
            `<div class ='card__items'>
            ${key}
        </div>`;
    }

    for (let key of fullGameCards) {
        fullGamePageItems =
            fullGamePageItems +
            `<div class ='card__items'>
            ${key}
        </div>`;
    }

    let gamePageContent = `
    <div class="header__container">
        <div class="header__timerfield">
            <div class="header__timertitle">
                <div class="header__timernamemin">min</div>
                <div class="header__timernamesec">sec</div>
            </div>
            <div class="header__timerclock">
                <div class="header__timercounter header__timercounter--decimin">0</div>
                <div class="header__timercounter header__timercounter--min">0</div>
                <div class="header__timercounter header__timercounter--point">.</div>
                <div class="header__timercounter header__timercounter--decisec">0</div>
                <div class="header__timercounter header__timercounter--sec">0</div>
            </div>
        </div>
        <div class="header__button global__button">Начать заново</div>
    </div>    
    <div class = "card__container card__container--full center">
        ${fullGamePageItems}
    </div>`;

    contentElement.innerHTML = gamePageContent;

    setTimeout(() => {
        gamePageContent = `
    <div class="header__container">
        <div class="header__timerfield">
            <div class="header__timertitle">
                <div class="header__timernamemin">min</div>
                <div class="header__timernamesec">sec</div>
            </div>
            <div class="header__timerclock">
                <div class="header__timercounter header__timercounter--decimin">0</div>
                <div class="header__timercounter header__timercounter--min">0</div>
                <div class="header__timercounter header__timercounter--point">.</div>
                <div class="header__timercounter header__timercounter--decisec">0</div>
                <div class="header__timercounter header__timercounter--sec">0</div>
            </div>
        </div>
        <div class="header__button global__button">Начать заново</div>
    </div>    
    <div class = "card__container card__container--${level}">
        ${gamePageItems}
    </div>`;

        contentElement.innerHTML = gamePageContent;
    }, 3000);
}
