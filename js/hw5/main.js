//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a, b) {
//     let result = a * b;
//     console.log(result);
//     return result;
// }
//
// area(5, 10);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function area(r) {
//     let result = Math.pow(r, 2) * Math.PI;
//     console.log(result);
//     return result;
// }
//
// area(5);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function area(r, h) {
//     let result = 2 * (Math.pow(r, 2) * Math.PI) + 2 * (Math.PI * r * h);
//     console.log(result);
//     return result;
// }
//
// area(5, 3);

// - створити функцію яка приймає масив та виводить кожен його елемент
// function arrPrinter(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
//
// arrPrinter([5, 6, 8.15, 42, 69, 75]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraphCreator(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// paragraphCreator('My name is Marta');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li
// визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ulCreator(text, quantity) {
//     document.write(`<ul>`);
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${text}</li>`);
//     }
// }
//
// document.write((`</ul>`));
//
// ulCreator('hi', 5);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let users = [
//     {name: 'vasya', age: 31, id: 1},
//     {name: 'petya', age: 30, id: 2},
//     {name: 'kolya', age: 29, id: 3},
//     {name: 'olya', age: 28, id: 4},
//     {name: 'max', age: 30, id: 5},
//     {name: 'anya', age: 31, id: 6},
//     {name: 'oleg', age: 28, id: 7},
//     {name: 'andrey', age: 29, id: 8},
//     {name: 'masha', age: 30, id: 9},
//     {name: 'olya', age: 31, id: 10},
//     {name: 'max', age: 31, id: 11}
// ];
//
// function arrDisplay(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id}) ${arrElement.name} - ${arrElement.age}</div>`)
//     }
// }
//
//
// arrDisplay(users);

// - створити функцію яка повертає найменьше число з масиву
// function arrMin(arr) {
//     let min = arr[0];
//     for (const arrElement of arr) {
//         if (arrElement < min) {
//             min = arrElement;
//         }
//     }
//     console.log(min);
//     return min;
// }
//
// arrMin([100, 45, 37, 5, 48, 3, 59, 1]);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function arrSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
//     return sum;
// }
//
// arrSum([25,69,3,75,10]);