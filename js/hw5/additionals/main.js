// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const findMin = (x, y, z) => {
//     let min;
//     if (x < y && x < z) {
//         min = x;
//     } else if (y < x && y <z) {
//         min = y;
//     } else if (z < y && z < x) {
//         min = z;
//     }
//
//     return min;
// }
//
// console.log(findMin(5052, 4050, 2146));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const findMax = (x, y, z) => {
//     let max;
//     if (x > y && x > z) {
//         max = x;
//     } else if (y > x && y > z) {
//         max = y;
//     } else if (z > y && z > x) {
//         max = z;
//     }
//
//     return max;
// }
//
// console.log(findMax(5052, 4050, 2146));

// - створити функцію яка повертає найбільше число з масиву
// const findMax = (array) => {
//     let max = array[0];
//     for (const item of array) {
//         if (item > max) {
//             max = item;
//         }
//     }
//     return max;
// }
//
// console.log(findMax([5052, 4050, 2146]));

// - створити функцію яка повертає найменьше число з масиву
// const findMin = (array) => {
//     let min = array[0];
//     for (const item of array) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
// }
//
// console.log(findMin([5052, 4000, 2146]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//  const arraySum = (array) => {
//     let sum =0;
//      for (const arrayElement of array) {
//          sum+=arrayElement;
//      }
//      return sum;
//  }
//
// console.log(arraySum([7498,3698,402,351]));

// - Дано натуральное число n. Выведите все числа от 1 до n.
// const printer = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
// }
//
// printer(30);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A > B, или в порядке убывания в противном случае.
// const printDiff = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     } else if (a > b) {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
// }
//
// printDiff(6, 16);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// function changer(array, i) {
//     let temp = array[i];
//     array[i] = array[i + 1];
//     array[i + 1] = temp;
//     return array;
// }
//
// console.log(changer([9, 6, 3, 1], 0));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
