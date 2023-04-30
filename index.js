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

let toggle_one = false;
let toggle_two = false;
let toggle_three = false;

// phoneNum.addEventListener("focus", function() {
//     if (phoneNum.value === "") {
//         phoneNum.value = "+7 ";
//     }
// });

phoneNum.addEventListener("keydown", function() {
    if (phoneNum.value === "") {
        phoneNum.value = "+7 ";
    }
});

phoneNum.addEventListener("keyup", PhoneValidation);

function PhoneValidation() {
    let validRegex = /[+7]\s[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}/;

    if (validRegex.test(phoneNum.value)) {
        phoneNum.classList.add("valid");
        phoneNum.classList.remove("error");
    }

    if (!validRegex.test(phoneNum.value)) {
        phoneNum.classList.add("error");
        phoneNum.classList.remove("valid");
    } 

    // if (phoneNum.value.length === 6 || phoneNum.value.length === 10 || phoneNum.value.length === 13) {
    //     phoneNum.value += "-";
    // }

    if (phoneNum.value.length === 2) {
        phoneNum.value += " ";
    }

    if (phoneNum.value.length === 6 && toggle_one === false) {
        phoneNum.value += "-";
        toggle_one = true;
    } else if (phoneNum.value.length < 6) {
        toggle_one = false;
    }

    if (phoneNum.value.length === 10 && toggle_two === false) {
        phoneNum.value += "-";
        toggle_two = true;
    } else if (phoneNum.value.length < 10 && phoneNum.value.length > 6) {
        toggle_two = false;
    }

    if (phoneNum.value.length === 13 && toggle_three === false) {
        phoneNum.value += "-";
        toggle_three = true;
    } else if (phoneNum.value.length < 13 && phoneNum.value.length > 10) {
        toggle_three = false;
    }
}


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
        email.classList.remove("error");
        email.classList.add("valid");
    }

    if (!validRegex.test(email.value)) {
        email.classList.remove("valid");
        email.classList.add("error");
    }
}

//name validation

firstName.addEventListener("keyup", FNameValidation);
lastName.addEventListener("keyup", LNameValidation);

function FNameValidation() {
    let validRegex = /[a-zA-Z]+$/;

    console.log(firstName.value);

    if (validRegex.test(firstName.value)) {
        firstName.classList.add("valid");
        firstName.classList.remove("error");
    }

    if (!validRegex.test(firstName.value)) {
        firstName.classList.add("error");
        firstName.classList.remove("valid");
    }  
}

function LNameValidation() {
    let validRegex = /[a-zA-Z]+$/;

    if (validRegex.test(lastName.value)) {
        lastName.classList.add("valid");
        lastName.classList.remove("error");
    }

    if (!validRegex.test(lastName.value)) {
        lastName.classList.add("error");
        lastName.classList.remove("valid");
    }
}


