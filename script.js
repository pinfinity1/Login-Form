const usernameInput = document.getElementById("usernameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const usernameMsg = document.querySelector(".username_msg");
const emailMsg = document.querySelector(".email_msg");
const passwordMsg = document.querySelector(".password_msg");
const loginBtn = document.querySelector(".btn");





usernameInput.addEventListener("keyup" , (event) => {
    const usernameValue = usernameInput.value;
    const userRegex = /^[a-zA-Z]{5,15}$/;
    usernameMsg.innerText = "";
    if (!userRegex.test(usernameValue)) {
        usernameMsg.innerText = "- Please enter valid Username!";
    };
});

emailInput.addEventListener("keyup" , (event) => {
    const emailValue = emailInput.value;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    emailMsg.innerText = "";
    if (!emailRegex.test(emailValue)) {
        emailMsg.innerText = "- Please enter valid Email!";
    };
});

passwordInput.addEventListener("keyup" , (event) => {
    const passwordValue = passwordInput.value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    passwordMsg.innerText = "";
    if (!passwordRegex.test(passwordValue)) {
        passwordMsg.innerText = "- Please enter valid Password!";
    };
});






// loginBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     const usernameValue = usernameInput.value;
//     const emailValue = emailInput.value;
//     const passwordValue = passwordInput.value;
//     usernameMsg.innerText = "";
//     emailMsg.innerText = "";
//     passwordMsg.innerText = "";

//     const userRegex = /^[a-zA-Z]{5,15}$/;
//     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

//     if (!userRegex.test(usernameValue)) {
//         usernameMsg.innerText = "- Please enter valid Username!";
//     };
//     if (!emailRegex.test(emailValue)) {
//         emailMsg.innerText = "- Please enter valid email!";
//     }
//     if (!passwordRegex.test(passwordValue)) {
//         passwordMsg.innerText = "- Please enter valid password!";
//     }
// })