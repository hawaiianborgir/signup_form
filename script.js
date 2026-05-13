const 
    button = document.querySelector('.footer__button'),
    password = document.getElementById('form__password'),
    confirmPassword = document.getElementById('form__password-confirmation'),
    errorMessage = document.querySelector('.error'),
    mainForm = document.getElementById('content__form');

function confirmationValue(a, b) {
    let passStatus;
    if (a.value === b.value) {
        passStatus = 1;
    } else {
        passStatus = 0;
    }
    return passStatus;
}

mainForm.addEventListener("submit", (e) => {
    const passStatus = confirmationValue(password, confirmPassword)
    
    if (!passStatus) {
        e.preventDefault();
        confirmPassword.classList.add("pass--error")
        errorMessage.textContent = "Password confirmation does not match.";
    }
})

confirmPassword.addEventListener("keyup", (e) => {
    confirmPassword.classList.remove("pass--error")
    errorMessage.textContent = "";
})