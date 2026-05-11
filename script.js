const 
    button = document.querySelector('.footer__button'),
    password = document.getElementById('form__password'),
    confirmPassword = document.getElementById('form__password-confirmation');
    errorMessage = document.querySelector('.error');

function confirmationValue(a, b) {
    let passStatus;
    if (a.value === b.value) {
        passStatus = 1;
    } else {
        passStatus = 0;
    }
    return passStatus;
}

button.addEventListener("click", (e) => {
    const passStatus = confirmationValue(password, confirmPassword)
    
    if (!passStatus) {
        e.preventDefault();
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
        errorMessage.textContent = "Password confirmation does not match."
    }
    
})