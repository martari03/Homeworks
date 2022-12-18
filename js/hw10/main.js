//зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
let block = document.querySelector('.main');
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let h2 = document.createElement('h2');
            let a = document.createElement('a');
            a.innerText = `${user.id}. ${user.name}`;
            a.href = `user-details.html?id=${user.id}`;
            h2.appendChild(a);
            block.appendChild(h2);
        }
    });