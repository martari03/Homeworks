//- Знайти та вивести довижину наступних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// let  hw = 'hello world';
// let li = 'lorem ipsum';
// let jsic = 'javascript is cool';
//
// console.log(hw.length, li.length, jsic.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// let  hw = 'hello world';
// let li = 'lorem ipsum';
// let jsic = 'javascript is cool';
//
// console.log(hw.toUpperCase(), li.toUpperCase(), jsic.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let  hw = 'HELLO WORLD';
// let li = 'LOREM IPSUM';
// let jsic = 'JAVASCRIPT IS COOL';
//
// console.log(hw.toLowerCase(), li.toLowerCase(), jsic.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// let str = 'Ревуть воли як ясла повні';
// let arr = str.split(' ');
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// console.log(arr.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// function sortNums(arr, direction) {
//     if (direction === 'ascending') {
//         return (arr.sort((a, b) => a - b));
//     }
//     if (direction === 'descending')
//         return (arr.sort((a, b) => b - a));
// }
//
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
// console.log(coursesAndDurationArray.sort((a, b) => {
//     if (a.monthDuration < b.monthDuration) {
//         return 1;
//     }
//     if (a.monthDuration > b.monthDuration) {
//         return -1;
//     }
//     if (a.monthDuration === b.monthDuration) {
//         return 0;
//     }
// }));
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter((value) => {
//     if (value.monthDuration > 5) {
//         return value;
//     }
// }));

//  описати колоду карт
// let deck = [
//     {cardSuit: 'Spade', value: 6, color: 'Black'},
//     {cardSuit: 'Clubs', value: 6, color: 'Black'},
//     {cardSuit: 'Hearts', value: 6, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 6, color: 'Red'},
//     {cardSuit: 'Spade', value: 7, color: 'Black'},
//     {cardSuit: 'Clubs', value: 7, color: 'Black'},
//     {cardSuit: 'Hearts', value: 7, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 7, color: 'Red'},
//     {cardSuit: 'Spade', value: 8, color: 'Black'},
//     {cardSuit: 'Clubs', value: 8, color: 'Black'},
//     {cardSuit: 'Hearts', value: 8, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 8, color: 'Red'},
//     {cardSuit: 'Spade', value: 9, color: 'Black'},
//     {cardSuit: 'Clubs', value: 9, color: 'Black'},
//     {cardSuit: 'Hearts', value: 9, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 9, color: 'Red'},
//     {cardSuit: 'Spade', value: 10, color: 'Black'},
//     {cardSuit: 'Clubs', value: 10, color: 'Black'},
//     {cardSuit: 'Hearts', value: 10, color: 'Red'},
//     {cardSuit: 'Diamonds', value: 10, color: 'Red'},
//     {cardSuit: 'Spade', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Jack', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Jack', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Queen', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Queen', color: 'Red'},
//     {cardSuit: 'Spade', value: 'King', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'King', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'King', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'King', color: 'Red'},
//     {cardSuit: 'Spade', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Clubs', value: 'Ace', color: 'Black'},
//     {cardSuit: 'Hearts', value: 'Ace', color: 'Red'},
//     {cardSuit: 'Diamonds', value: 'Ace', color: 'Red'}
// ];

//  - знайти піковий туз
// console.log(deck.filter((value) => value.cardSuit === 'Spade' && value.value === 'Ace'));

//  - всі шістки
//console.log(deck.filter((value) => value.value === 6));

//  - всі червоні карти
//console.log(deck.filter((value) => value.color === 'Red'));

//  - всі буби
//console.log(deck.filter((value) => value.cardSuit === 'Diamonds'));

//  - всі трефи від 9 та більше
//console.log(deck.filter((value) => value.cardSuit === 'Clubs' &&
//   (value.value === 9 || value.value === 10 || value.value === 'Jack' || value.value === 'Queen' || value.value
//   === 'King')));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// console.log(deck.reduce((accumulator, card) => {
//     if (card.cardSuit === 'Spade') {
//         accumulator.spades.push(card.value);
//     }
//     if (card.cardSuit === 'Diamonds') {
//         accumulator.diamonds.push(card.value);
//     }
//     if (card.cardSuit === 'Hearts') {
//         accumulator.hearts.push(card.value);
//     }
//     if (card.cardSuit === 'Clubs') {
//         accumulator.clubs.push(card.value);
//     }
//     return accumulator;
// }, {spades: [], diamonds: [], hearts: [], clubs: []}));