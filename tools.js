// Функция получает перетасованную колоду из 36 карт.
//Создает случайный массив карт в зависимости от уровня и помещает в localStorage


export function createRandomCardCollection({levelOfGame}) {
    let fullCardCollection = [];
    let gameCardCollection = [];
    let cardSuite = ['spades', 'clubs', 'diamonds', 'hearts'];
    let cardDignity=['six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king', 'ace'];

    for (let suite of cardSuite){
    
        for (let dignity of cardDignity){
    
            fullCardCollection.push(dignity + ' of ' + suite);
            shuffle(fullCardCollection);
            
        }
    }
    if(levelOfGame=='1') fullCardCollection.length=3;
    if(levelOfGame=='2') fullCardCollection.length=6;
    if(levelOfGame=='3') fullCardCollection.length=9;

    gameCardCollection = fullCardCollection.concat(fullCardCollection);

    shuffle(gameCardCollection);
        
    window.localStorage.setItem('gameCardCollection', JSON.stringify(gameCardCollection));    
}


// Функция-рандомизатор    

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
 }