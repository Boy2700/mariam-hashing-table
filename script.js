// Demo or didn't happen

var signin = document.querySelector('#signin')
var register = document.querySelector('#register')
setTimeout(function() { register.checked = true }, 1000)
setTimeout(function() { signin.checked = true }, 5000)




document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton').addEventListener('click', function() {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Check if username and password match
        if (username === 'mariam' && password === 'mariam') {
            alert('Login Successful!');
            window.location.href = 'app/home.html'; // Redirect to home page
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});