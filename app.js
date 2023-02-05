const form = document.querySelector("#form");
const firstNameInput = document.querySelector(".form__first-name");
const lasttNameInput = document.querySelector(".form__last-name");
const emailInput = document.querySelector(".form__email-address");
const passwordInput = document.querySelector(".form__Password");
const allInputs = document.querySelectorAll("input")
let count = 0;
const checkFirstName = () => {
    const firstName = firstNameInput.value.trim();
    let valid = false;
    const min = 3;
    const max = 25;
    if (!isCompleted(firstName)) {
        showMessage(firstNameInput, "First Name cannot be empty");
    } else if (!inRange(firstName.length, min, max)) {
        showMessage(firstNameInput, `First name must have beetween ${min} and ${max} character`);
    } else {
        firstNameInput.classList.remove("no-valid");
        valid = true;
    }
    if (!valid) {
        firstNameInput.classList.add("no-valid");
        firstNameInput.setAttribute("placeholder", "")
    }
    return valid
}
const checkLasttName = () => {
    const lastName = lasttNameInput.value.trim();
    let valid = false;
    const min = 3;
    const max = 25;
    if (!isCompleted(lastName)) {
        showMessage(lasttNameInput, "Last Name cannot be empty");
    } else if (!inRange(lastName.length, min, max)) {
        showMessage(lasttNameInput, `last name must have beetween ${min} and ${max} character`);
    } else {
        lasttNameInput.classList.remove("no-valid")
        valid = true;
    }
    if (!valid) {
        lasttNameInput.classList.add("no-valid");
        lasttNameInput.setAttribute("placeholder", "")
    }
    return valid
}
const checkEmail = () => {
    let valid = false;
    const email = emailInput.value.trim();
    if (!isCompleted(email)) {
        showMessage(emailInput, "Email cannot be empty");
    } else if (!isEmailValid(email)) {
        showMessage(emailInput, "Looks like this is not an email");
    } else {
        emailInput.classList.remove("no-valid")
        valid = true;
    }
    if (!valid) {
        emailInput.classList.add("no-valid");
        emailInput.setAttribute("placeholder", "email@example/com")
    }
    return valid

}
const checkPassword = () => {
    let valid = false;
    const password = passwordInput.value.trim();
    if (!isCompleted(password)) {
        showMessage(passwordInput, "Password cannot be empty");
    }
    else if (!isPasswordSecure(password)) {
        showMessage(passwordInput, "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'");
    } else {
        passwordInput.classList.remove("no-valid")
        valid = true;
    }
    if (!valid) {
        passwordInput.classList.add("no-valid");
        passwordInput.setAttribute("placeholder", "")
    }
    return valid
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const checkNameResult = checkFirstName(),
        checkLastNameResult = checkLasttName(),
        checkEmailResult = checkEmail(),
        checkPassResult = checkPassword();
    if (checkNameResult && checkLastNameResult && checkEmailResult && checkPassResult) {
        form.submit()
    }
    count++;
})
const isCompleted = value => value === "" ? false : true;
const inRange = (lenght, min, max) => lenght >= min && lenght <= max ? true : false;
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

function showMessage(input, message) {
    const messangeTag = input.nextElementSibling;
    messangeTag.textContent = message;
}
form.addEventListener("input", (e) => {
    
    if(count>=1){

        const id = e.target.id;
        switch (id) {
            case "form__first-name": {
                checkFirstName();
                break;
            }
            case "form__last-name": {
                checkLasttName();
                break;
            }
            case "form__email-address": {
                checkEmail();
                break;
            }
            case "form__Password": {
                checkPassword();
                break;
            }
        }
    }
})


