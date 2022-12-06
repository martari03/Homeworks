//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [];
// users[0] = new User(users.length + 1, "vasya", "dukyi", "v.d@gmail.com", "093 523 4841");
// users[1] = new User(users.length + 1, "anya", "grey", "a.g@gmail.com", "093 523 4842");
// users[2] = new User(users.length + 1, "olya", "jobs", "o.j@gmail.com", "093 523 4843");
// users[3] = new User(users.length + 1, "anriy", "cukerberg", "a.c@gmail.com", "093 523 4844");
// users[4] = new User(users.length + 1, "kolya", "jeon", "k.j@gmail.com", "093 523 4845");
// users[5] = new User(users.length + 1, "dima", "kim", "d.k@gmail.com", "093 523 4846");
// users[6] = new User(users.length + 1, "masha", "park", "m.p@gmail.com", "093 523 4847");
// users[7] = new User(users.length + 1, "sasha", "min", "s.m@gmail.com", "093 523 4848");
// users[8] = new User(users.length + 1, "kostya", "lyang", "k.l@gmail.com", "093 523 4849");
// users[9] = new User(users.length + 1, "dasha", "kostetska", "d.a@gmail.com", "093 523 4817");
//
// console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = users.filter((value) => value.id % 2 === 0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((a, b) => {
//     if (a.id < b.id) {
//         return -1;
//     }
//     if (a.id > b.id) {
//         return 1;
//     }
//     if (a.id === b.id) {
//         return 0;
//     }
// }));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів) створити пустий масив, наповнити його 10 об'єктами Client
//  class Client{
//      constructor(id, name, surname, email, phone, order) {
//          this.id = id;
//          this.name = name;
//          this.surname = surname;
//          this.email = email;
//          this.phone = phone;
//          this.order = order;
//      }
// }
//
// let clients = [];
// clients[0] = new Client(clients.length + 1, "vasya", "dukyi", "v.d@gmail.com", "093 523 4841", ["milk", "melon", "grapefruit"]);
// clients[1] = new Client(clients.length + 1, "anya", "grey", "a.g@gmail.com", "093 523 4842", ["cheese","apple", "grape", "banana"]);
// clients[2] = new Client(clients.length + 1, "olya", "jobs", "o.j@gmail.com", "093 523 4843",["pineapple"]);
// clients[3] = new Client(clients.length + 1, "anriy", "cukerberg", "a.c@gmail.com", "093 523 4844",["cola", "watermelon"]);
// clients[4] = new Client(clients.length + 1, "kolya", "jeon", "k.j@gmail.com", "093 523 4845", ["kinder"]);
// clients[5] = new Client(clients.length + 1, "dima", "kim", "d.k@gmail.com", "093 523 4846", ["water", "tomato", "cream", "bread", "salt"]);
// clients[6] = new Client(clients.length + 1, "masha", "park", "m.p@gmail.com", "093 523 4847", ["cream", "pie"]);
// clients[7] = new Client(clients.length + 1, "sasha", "min", "s.m@gmail.com", "093 523 4848", ["chocolate", "bread"]);
// clients[8] = new Client(clients.length + 1, "kostya", "lyang", "k.l@gmail.com", "093 523 4849", ["egg"]);
// clients[9] = new Client(clients.length + 1, "dasha", "kostetska", "d.k@gmail.com", "093 523 4817", ["orange", "grapefruit", "sprite"]);
//
//console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort((a, b) => {
//     if (a.order.length < b.order.length) {
//         return -1;
//     }
//     if (a.order.length > b.order.length) {
//         return 1;
//     }
//     if (a.order.length === b.order.length) {
//         return 0;
//     }
// }));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає
//     його в поточний об'єкт car
// function Cars(model, manufacturer, year, maxVelocity, volume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxVelocity = maxVelocity;
//     this.volume = volume;
//     this.drive = function () {
//         return `їдемо зі швидкістю ${this.maxVelocity} km на годину`;
//     }
//     this.info = function () {
//         return `Model - ${this.model}\n Manufacturer - ${this.manufacturer}\n Year of manufacture - ${this.year}\n Max velocity - ${this.maxVelocity} km/h\n Engine volume - ${this.volume}`;
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         return `Max speed now is - ${this.maxVelocity += newSpeed} km/h`;
//     }
//     this.changeYear = function (newValue) {
//         return this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         return this.driver = driver;
//     }
// }
//
// let car = new Cars('AMG GT 63 S', 'Mercedes-Benz', 2018, 310, '3982 cm3');
// console.log(car);
// console.log(car.drive());
// console.log(car.info());
// console.log(car.increaseMaxSpeed(10));
// car.changeYear(2020);
// car.addDriver('Jeon Jungkook');
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Cars{
//     constructor(model, manufacture, year, maxVelocity, volume) {
//         this.model = model;
//         this.manufacture = manufacture;
//         this.year = year;
//         this.maxVelocity = maxVelocity;
//         this.volume = volume;
//     }
//     drive() {
//         return `їдемо зі швидкістю ${this.maxVelocity} km на годину`;
//     }
//     info() {
//         return `Model - ${this.model}\n Manufacturer - ${this.manufacturer}\n Year of manufacture - ${this.year}\n Max velocity - ${this.maxVelocity} km/h\n Engine volume - ${this.volume}`;
//     }
//     increaseMaxSpeed(newSpeed) {
//         return `Max speed now is - ${this.maxVelocity += newSpeed} km/h`;
//     }
//     changeYear(newValue) {
//         return this.year = newValue;
//     }
//     addDriver(driver) {
//         return this.driver = driver;
//     }
// }
//
// let car = new Cars('AMG GT 63 S', 'Mercedes-Benz', 2018, 310, '3982 cm3');
// console.log(car);
// console.log(car.drive());
// console.log(car.info());
// console.log(car.increaseMaxSpeed(10));
// car.changeYear(2020);
// car.addDriver('Jeon Jungkook');
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
//
// let cinderellas = [];
// cinderellas[0] = new Cinderella('ann', 20, 35);
// cinderellas[1] = new Cinderella('liz', 23, 38);
// cinderellas[2] = new Cinderella('diana', 18, 37);
// cinderellas[3] = new Cinderella('masha', 21, 39);
// cinderellas[4] = new Cinderella('elza', 25, 36);
// cinderellas[5] = new Cinderella('marta', 22, 37);
// cinderellas[6] = new Cinderella('olya', 24, 38);
// cinderellas[7] = new Cinderella('nina', 19, 35);
// cinderellas[8] = new Cinderella('ira', 20, 37);
// cinderellas[9] = new Cinderella('ella', 23, 39);
// console.log(cinderellas);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, shoeThatHeFound) {
//         this.name = name;
//         this.age = age;
//         this.shoeThatHeFound = shoeThatHeFound;
//     }
// }
//
// let prince = new Prince('patrik', 27, 36);
//console.log(prince);

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince.shoeThatHeFound) {
//         console.log(`${prince.name}'s cinderella is ${cinderella.name}`);
//     }
// }

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// cinderellas.find(value => {
//         if (value.footSize === prince.shoeThatHeFound) {
//             console.log(`${prince.name}'s cinderella is ${value.name}`);
//         }
//     })