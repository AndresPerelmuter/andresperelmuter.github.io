// script.js

document.addEventListener('DOMContentLoaded', function () {
    var getInTouchButton = document.querySelector('.nav-links .button');

    getInTouchButton.addEventListener('click', function (event) {
        event.preventDefault();
        alert('Get in touch clicked!');
        // You can add more interactive code here, like opening a contact form
    });
});
