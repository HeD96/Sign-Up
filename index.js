let password = document.getElementById("password");
let password_confirm = document.getElementById("confirm");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let phoneNum = document.getElementById("phone_num");
let pass = document.querySelectorAll(".pass");

phoneNum.value = "+7 ";

//password matching

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
        });
    } else {
        pass.forEach(function(outline) {
            outline.classList.remove("valid");
            outline.classList.add("error");
        });
    }
}




