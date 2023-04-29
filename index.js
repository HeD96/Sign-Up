//password fields
let password = document.getElementById("password");
let password_confirm = document.getElementById("confirm");
let pass = document.querySelectorAll(".pass");
let errorMessage = document.getElementById("error_message");
//name fields
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
//email field
let email = document.getElementById("email");
//phone number field
let phoneNum = document.getElementById("phone_num");


//phone number validation

phoneNum.addEventListener("focus", function() {
    if (phoneNum.value === "") {
        phoneNum.value = "+7 ";
    }
});


//password validation

password.addEventListener("keyup", function() {
    if (password_confirm.value !== "") {
        CheckPassword();
    }
});

password_confirm.addEventListener("keyup", CheckPassword);

function CheckPassword() {

    if (password.value === password_confirm.value) {
        pass.forEach(function(outline) {
            outline.classList.remove("error");
            outline.classList.add("valid");
            errorMessage.classList.add("invisible");
        });
    } else {
        pass.forEach(function(outline) {
            outline.classList.remove("valid");
            outline.classList.add("error");
            errorMessage.classList.remove("invisible");
        });
    }
}

//email validation

email.addEventListener("keyup", EmailValidation);

function EmailValidation() {
    let validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (validRegex.test(email.value)) {
        email.classList.add("valid");
    }
}

//name validation

function NameValidation() {

}


