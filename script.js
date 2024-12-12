// Toggle Password Visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    const passwordType = passwordField.type === "password" ? "text" : "password";
    passwordField.type = passwordType;
}

// Check Password Strength
function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthSlider = document.getElementById("strengthSlider");
    const strengthMeter = document.getElementById("strengthMeter");
    const strengthText = document.getElementById("strengthText");
    const lowercase = document.getElementById("lowercase");
    const uppercase = document.getElementById("uppercase");
    const numbers = document.getElementById("numbers");
    const specialChars = document.getElementById("specialChars");
    const celebration = document.getElementById("celebration");

    let strength = 0;

    // Check for criteria
    lowercase.checked = /[a-z]/.test(password);
    uppercase.checked = /[A-Z]/.test(password);
    numbers.checked = /\d/.test(password);
    specialChars.checked = /[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|]/.test(password);

    // Calculate Strength
    if (password.length > 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 15;
    if (/[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:'",<>\./?\\|]/.test(password)) strength += 10;

    strengthSlider.value = strength;
    strengthMeter.style.width = `${strength}%`;

    // Strength Text and Color
    if (strength <= 30) {
        strengthText.textContent = "Weak Password";
        strengthMeter.style.backgroundColor = "red";
    } else if (strength <= 60) {
        strengthText.textContent = "Moderate Password";
        strengthMeter.style.backgroundColor = "orange";
    } else {
        strengthText.textContent = "Strong Password";
        strengthMeter.style.backgroundColor = "green";
    }

    // Celebration if password is strong
    if (strength === 100) {
        celebration.style.display = "block";
    } else {
        celebration.style.display = "none";
    }
}

// Toggle Navigation for Small Screens
function toggleMenu() {
    const menu = document.getElementById("navMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
