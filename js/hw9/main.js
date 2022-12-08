//- є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// for (const simpson of simpsons) {
//     let div = document.createElement('div');
//     div.classList.add('member');
//     div.innerHTML = `<h3>${simpson.name} ${simpson.surname} (${simpson.age} years)</h3>
//     <img src="${simpson.photo}" alt="${simpson.name} ${simpson.surname}">
//     <p>${simpson.info}</p>`;
//     document.body.appendChild(div);
// }
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
// for (const course of coursesArray) {
//     let mainDiv = document.createElement('div');
//     mainDiv.classList.add('main');
//     let title = document.createElement('div');
//     title.innerHTML = `<h3>${course.title}</h3>`;
//     mainDiv.appendChild(title);
//     let div23 = document.createElement('div');
//     div23.classList.add('container')
//     let durationM = document.createElement('div');
//     durationM.classList.add('width');
//     durationM.innerText = `Months duration: ${course.monthDuration}`;
//     div23.appendChild(durationM);
//     let durationH = document.createElement('div');
//     durationH.classList.add('width');
//     durationH.innerText = `Hours duration: ${course.hourDuration}`;
//     div23.appendChild(durationH);
//     mainDiv.appendChild(div23);
//     let ul = document.createElement('ul');
//     let p = document.createElement('p');
//     p.innerText = `Modules:`;
//     mainDiv.appendChild(p);
//     for (const element of course.modules) {
//         let li = document.createElement('li');
//         li.innerText = element;
//         ul.appendChild(li);
//     }
//     mainDiv.appendChild(ul);
//     document.body.appendChild(mainDiv);
// }

// - створити блок,
// let div = document.createElement('div');
// div.innerText = 'Hello OKTEN'
// - додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap', 'collapse', 'alpha', 'beta')
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// document.body.appendChild(div);
// - клонувати його повністю, та додати клон в body.
// let copy = div.cloneNode(true);
// document.body.appendChild(copy);

// - Є масив:
// let arr = ['Main', 'Products', 'About us', 'Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let ul = document.getElementsByTagName('ul')[0];
// for (const element of arr) {
//     let li = document.createElement('li');
//     li.classList.add('menu')
//     li.innerText = element;
//     ul.append(li);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.innerHTML = `<h3>Title: ${element.title}</h3>
//     <h4>MonthDuration: ${element.monthDuration}</h4>`;
//     document.body.appendChild(div);
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
// -----------
// for (const element of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = element.title;
//     div.appendChild(h1);
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText = element.monthDuration;
//     div.appendChild(p);
//     document.body.appendChild(div);
//}

// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let p = document.createElement('p');
// p.id = 'text';
// p.innerText =`Lorem ipsum!`;
// document.body.appendChild(p);
// let button = document.createElement('button');
// button.innerText = 'Click me!'
// document.body.appendChild(button);
// button.onclick = function (e) {
//     let byId = document.getElementById('text');
//     document.body.removeChild(byId);
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.createElement('input');
// input.name = 'Age';
// input.type =  'number';
// document.body.appendChild(input);
// let button = document.createElement('button');
// button.innerText = 'Click me!'
// document.body.appendChild(button);
// button.onclick = function (e){
//     let age = +input.value;
//     if(age <= 18){
//         let p = document.createElement('p');
//         p.innerText = `You aren't allowed!`
//         document.body.appendChild(p);
//     }
// }

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
//1
// let row = document.createElement('input');
// row.name = 'row';
// row.type = 'number';
// let column = document.createElement('input');
// column.name = 'column';
// column.type = 'number';
// let text = document.createElement('input');
// text.name = 'text';
// text.type = 'text';
// let button = document.createElement('button');
// button.innerText = 'Click me!'
// document.body.append(row, column, text, button);
// button.onclick = function (e) {
//     let mainDiv = document.createElement('div');
//     mainDiv.classList.add('wrapper');
//     for (let i = 0, j = 0; i < +row.value, j < +column.value; i++, j++) {
//         let rows = document.createElement('div');
//         rows.classList.add('row');
//         let columns = document.createElement('div');
//         columns.classList.add('column');
//         columns.innerText = `${text.value}`;
//         rows.appendChild(columns);
//         mainDiv.appendChild(rows);
//     }
//     document.body.appendChild(mainDiv);
// }
//2
// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
//
// let button = document.createElement('button');
// button.innerText = 'Click';
//
// document.body.append(inputOne,inputTwo,inputThree,button);
//
// button.onclick = () => {
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let text = inputThree.value;
//
//     const generateTable = (raws,columns,word) => {
//         let table = document.createElement('table');
//         table.style.border = `2px solid black`;
//         document.body.append(table);
//
//         for (let i = 0; i < raws; i++) {
//             let raw = document.createElement('tr');
//             table.append(raw);
//
//             for (let j = 0; j < columns; j++) {
//                 let column = document.createElement('td');
//                 column.innerText = `${word}`;
//                 column.style.border = `2px solid red`;
//                 raw.append(column);
//             }
//         }
//     }
//     generateTable(tr,td,text);
// }