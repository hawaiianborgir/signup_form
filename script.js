const
    button = document.querySelector('button'),
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
        confirmPassword.classList.add("pass--error");
        errorMessage.textContent = "Password confirmation does not match.";
    }
})

confirmPassword.addEventListener("keydown", (e) => {
    confirmPassword.classList.remove("pass--error")
    errorMessage.textContent = "";
})

button.addEventListener("click", (e) => {
    if (password.validity.patternMismatch) {
        password.classList.add("pass--error");
    }
})
password.addEventListener("input", (e) => {
    if (!password.validity.patternMismatch) {
        password.classList.remove("pass--error");
    }
})