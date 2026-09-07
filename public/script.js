const modal = document.getElementById('authModal');

const loginButton = document.getElementById('loginButton');

const closeModal = document.getElementById('closeModal');

const heartButtons = document.querySelectorAll('.heart-button');


loginButton.addEventListener('click', function () {
    modal.classList.add('show');
});


closeModal.addEventListener('click', function () {
    modal.classList.remove('show');
});


heartButtons.forEach(function (button) {

    button.addEventListener('click', function () {
        modal.classList.add('show');
    });

});


modal.addEventListener('click', function (event) {

    if (event.target === modal) {
        modal.classList.remove('show');
    }

});