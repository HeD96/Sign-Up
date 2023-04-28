let password = document.getElementById("password");
let password_confirm = document.getElementById("confirm");
let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let phoneNum = document.getElementById("phone_num");

phoneNum.value = "+7 ";

password.addEventListener("keyup", function() {
    if (password_confirm.value !== "") {
        CheckPassword();
    }
});

password_confirm.addEventListener("keyup", CheckPassword);

function CheckPassword() {
    if (password.value === password_confirm.value) {
        alert("Yay!");
    }
}




