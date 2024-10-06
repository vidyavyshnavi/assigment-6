document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    let valid = true;
    if (password !== confirmPassword) {
        alert("Passwords doesn't match");
        valid = false;
    }
    if (!terms) {
        alert('You must agree to the Terms and Conditions');
        valid = false;
    }

    if (valid) {
        alert('Registration successfully!');
        document.getElementById('registrationForm').reset();
    }
});