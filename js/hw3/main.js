//- Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше
// виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
document.write('<h2>Task 1</h2>')
document.write('<h3>Part 1</h3>')
let x = +prompt('Enter number');
if (x !== 0) {
    document.write(x + ' - True\n');
} else {
    document.write(x + ' - False\n');
}

document.write('<h3>Part 2</h3>')
let a = +prompt('Enter 1 or 0 or -3');
if (a === 1 || a === 0 || a === -3) {
    if (a !== 0) {
        document.write(a + ' - True\n');
    } else {
        document.write(a + ' - False\n');
    }
} else {
    document.write('<p>You typed something wrong!</p>');
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години
// попадає число(в першу, другу, третю или четверту частину години).
document.write('<h2>Task 2</h2>')
let time = +prompt('Enter the number from range 0...59');
if (time >= 0 && time <= 15) {
    document.write(time + ' - First part of hour\n');
} else if (time > 15 && time <= 30) {
    document.write(time + ' - Second part of hour\n');
} else if (time > 30 && time <= 45) {
    document.write(time + ' - Third part of hour\n');
} else if (time > 45 && time <= 59) {
    document.write(time + ' - Fourth part of hour\n');
} else {
    document.write('<p>You typed something wrong!</p>');
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
document.write('<h2>Task 3</h2>')
let day = +prompt('Enter the number from range 1...31');
if (day >= 1 && day <= 10) {
    document.write(day + ' - First part of month\n');
} else if (day > 10 && day <= 20) {
    document.write(day + ' - Second part of month\n');
} else if (day > 20 && day <= 31) {
    document.write(day + ' - Third part of month\n');
} else {
    document.write('<p>You typed something wrong!</p>');
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
document.write('<h2>Task 4</h2>')
let weekDay = +prompt('Enter the number of the weekday for which you want to see the' +
    ' schedule:\n1-Monday\n2-Tuesday\n3-Wednesday\n4-Thursday\n5-Friday\n6-Saturday\n7-Sunday');
switch (weekDay) {
    case 1:
        document.write('<h3>Monday</h3>');
        document.write(
            '<p>University</p>' +
            '<p>Korean</p>' +
            '<p>Okten school</p>');
        break;
    case 2:
        document.write('<h3>Tuesday</h3>');
        document.write('<p>University</p>' +
            '<p>Okten school</p>');
        break;
    case 3:
        document.write('<h3>Wednesday</h3>');
        document.write('<p>University</p>' +
            '<p>Korean</p>' +
            '<p>Okten school</p>');
        break;
    case 4:
        document.write('<h3>Thursday</h3>');
        document.write(
            '<p>University</p>' +
            '<p>Okten school</p>');
        break;
    case 5:
        document.write('<h3>Friday</h3>');
        document.write('<p>University</p>' +
            '<p>Okten school</p>');
        break;
    case 6:
        document.write('<h3>Saturday</h3>');
        document.write(
            '<p>English</p>');
        break;
    case 7:
        document.write('<h3>Sunday</h3>');
        document.write('<p>Just relax and enjoy your free time!</p>');
        break;
    default:
        document.write('<p>You typed something wrong!</p>');
}

//  - Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох. Також потрібно
//  врахувати коли введені рівні числа.
document.write('<h2>Task 6</h2>')
let k = +prompt('Enter first number');
let b = +prompt('Enter second number');
if (k > b) {
    document.write('First number is bigger: ' + k + '\n');
} else if (k < b) {
    document.write('Second number is bigger: ' + b + '\n');
} else if (k === b) {
    document.write('Entered numbers are equal: ' + k + ' = ' + b + '\n');
} else {
    document.write('<p>You typed something wrong!</p>');
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код
// який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється
// falsy (хибноподыбне, тобто кастується до false)
document.write('<h2>Task 7</h2>')
let m;
m = prompt('If you want enter something');
if (m === 0 || isNaN(m) || m === '' || m === undefined || m === null || m === false) {
    m = "default";
} else {
    document.write(m);
}
