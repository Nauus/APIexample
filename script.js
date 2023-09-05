document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');


    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {

            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener usuarios:', error);
        });
});
