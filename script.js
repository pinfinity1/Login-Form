const usernameInput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const usernameMsg = document.querySelector(".username_msg");
const emailMsg = document.querySelector(".email_msg");
const passwordMsg = document.querySelector(".password_msg");
const loginBtn = document.querySelector(".btn");







loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const usernameValue = usernameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
    usernameMsg.innerText = "";
    emailMsg.innerText = "";
    passwordMsg.innerText = "";

    const userRegex = /^[a-zA-Z]{5,15}$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    if (!userRegex.test(usernameValue)) {
        usernameMsg.innerText = "- Please enter valid Username!";
    };
    if (!emailRegex.test(emailValue)) {
        emailMsg.innerText = "- Please enter valid email!";
    }
    if (!passwordRegex.test(passwordValue)) {
        passwordMsg.innerText = "- Please enter valid password!";
    }
})