let info = document.querySelector('.user');
let url = new URL(location.href);
let id = url.searchParams.get("id");
fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(request => request.json())
    .then(user => {
        let h2 = document.createElement('h2');
        h2.innerText = `${user.id}. ${user.name}`
        let ul = document.createElement('ul');
        for (const element in user) {
            const li = document.createElement('li');
            if (typeof user[element] !== 'object') {
                li.innerHTML = `<b>${element.toUpperCase()}</b>: ${user[element]}`;
            } else {
                li.innerHTML = `<b>${element.toUpperCase()}:</b>`
                let ul2 = document.createElement('ul');
                for (const key in user[element]) {
                    const li2 = document.createElement('li');
                    if (typeof user[element][key] !== 'object') {
                        li2.innerHTML = `<b>${key.toUpperCase()}</b>: ${user[element][key]}`;
                    } else {
                        li2.innerHTML = `<b>${key.toUpperCase()}</b>:`;
                        let ul3 = document.createElement('ul');
                        for (const item in user[element][key]) {
                            const li3 = document.createElement('li');
                            if (typeof user[element][key][item] !== 'object') {
                                li3.innerHTML = `<b>${item.toUpperCase()}</b>: ${user[element][key][item]}`;
                            }
                            ul3.appendChild(li3);
                            li2.appendChild(ul3);
                        }
                    }
                    ul2.appendChild(li2);
                    li.appendChild(ul2);
                }
            }
            ul.appendChild(li);
            info.append(h2, ul);
        }
    });