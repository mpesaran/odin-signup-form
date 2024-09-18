const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

const errorDivPassword = document.getElementById("error-password");
const errorDivConfirm = document.getElementById("error-confirm-password")
const passwordInput = document.getElementById("password")
const confirmPasswordInput = document.getElementById("confirm-password")

function validatePassword(password) {
    if (!passwordPattern.test(password)) {
        return "password doesn't match the pattern"
    }
    return ""
}

passwordInput.addEventListener("input", () => {
    const errorMessage = validatePassword(passwordInput.value)
    errorDivPassword.textContent = errorMessage;
    if (errorMessage) {
        errorDivPassword.style.color = "red"
        passwordInput.style.borderColor = "red"
        errorDivPassword.style.fontSize = "0.7em"
    } else {
        passwordInput.style.borderColor = "#E5E7EB"
    }
});

confirmPasswordInput.addEventListener("input", () => {
    if (confirmPasswordInput.value !== passwordInput.value) {
        errorDivConfirm.textContent = "Passwords do not match.";
        errorDivConfirm.style.color = "red";
        confirmPasswordInput.style.borderColor = "red";
        errorDivConfirm.style.fontSize = "0.7em"
    } else {
        errorDivConfirm.textContent = "";
        confirmPasswordInput.style.borderColor = "#E5E7EB"
    }
});




