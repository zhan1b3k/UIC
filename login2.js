// login.js

document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (response.ok) {
            alert('Вы вошли');
        } else {
            throw new Error('Неверное имя пользователя или пароль');
        }
    })
    .catch(error => {
        alert(error.message);
    });
});
