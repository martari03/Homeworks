//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = ['hi!', 52, true, 567, false, [25, 15], {id: 1, name: 'kate', age: 15}, 26, 3333, 'bye!'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let dandelionWine = {
    title: 'Dandelion Wine',
    pageCount: 432,
    genre: 'fantasy'
};

let allLight = {
    title: 'All the Light We Cannot See',
    pageCount: 352,
    genre: 'historical fiction'
};

let dreams = {
    title: 'What Dreams May Come',
    pageCount: 288,
    genre: 'detective'
};

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let eureka = {
    title: 'The Eureka Factor: Aha Moments, Creative Insight, and the Brain',
    pageCount: 368,
    genre: 'books on psychology',
    authors: [{name: 'John Kounios', age: 66}, {name: 'Mark Beeman', age: 60}]
};

let literature = {
    title: 'Literature A journey through the world of books ',
    pageCount: 192,
    genre: 'literary studies',
    authors: [{name: 'Katarina Marenholtz', age: 45}, {name: 'Don Parisi', age: 34}]
};

let code = {
    title: 'George and the Unbreakable Code',
    pageCount: 352,
    genre: 'popular science',
    authors: [{name: 'Lucy Hawking', age: 52}, {name: 'Stephen Hawking', age: 76}]
};

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [{
    name: 'kolya',
    username: 'diehardnetflyokraegg',
    password: 'h2n0hN0V#580'
}, {
    name: 'vasya',
    username: 'grasshoppereggryecat',
    password: 'Ld92#TW$C*z7'
}, {
    name: 'den',
    username: 'oportunitywalkerbat',
    password: '3Z@Bf3c2lf1y'
}, {
    name: 'pasha',
    username: 'algoltomatojuiceowl',
    password: '97J68Xm5%awc'
}, {
    name: 'masha',
    username: 'milkincendiescygnus',
    password: 'u56$e6M#3avV'
}, {
    name: 'dasha',
    username: 'hamsteellastradamilk',
    password: '*042FOlw29BP'
}, {
    name: 'katya',
    username: 'grootflystalkersing',
    password: '$s2fEU074PtC'
}, {
    name: 'sonya',
    username: 'hotelrwandagolfowl',
    password: 'AkNq937%0a0!'
}, {
    name: 'lina',
    username: 'groundhogdayneojuice',
    password: 'pNE0&7^2H&u&'
}, {
    name: 'stas',
    username: 'beforesunsetflatnova',
    password: 'hG%hG6bt32$K'
}];
console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);