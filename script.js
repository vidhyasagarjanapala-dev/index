document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevents the form from submitting normally

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation
        if (email === '' || password === '') {
            errorMessage.textContent = 'Please fill out all fields.';
            errorMessage.style.display = 'block';
        } else {
            // For a real application, you would send this data to a server.
            // For now, we'll just log a success message.
            console.log('Login successful! Email:', email);
            errorMessage.style.display = 'none';
            alert('Login successful!');
            // You could redirect the user here
            // window.location.href = 'dashboard.html';
        }
    });
});