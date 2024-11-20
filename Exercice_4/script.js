const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const button = document.querySelector('#button')

button.addEventListener('click', handleVerifyPassword);

function handleVerifyPassword(){
    if(password.value === confirmPassword.value){
        password.style.border = "3px solid green"
        confirmPassword.style.border = "3px solid green"
    }
    else {password.value != confirmPassword.value
        password.style.border = "3px solid red"
        confirmPassword.style.border = "3px solid red"
    }
}