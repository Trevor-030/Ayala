document.addEventListener('DOMContentLoaded', () => {
    // 1. Get references to the form and input fields
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginContainer = document.querySelector('.login-container');
    
    // --- Define the hardcoded correct credentials ---
    const CORRECT_USERNAME = 'Nana Adwoa'; 
    // *** MODIFIED: New password is the nickname 'Bala' ***
    const CORRECT_PASSWORD = 'Ayala'; 
    // *** MODIFIED: Redirects to 'index.html' when successful ***
    const SUCCESS_REDIRECT_URL = 'main_page.html'; 

    // 2. Add an event listener for the form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        clearMessages();

        // 3. Get the trimmed and lowercased input values
        const enteredUsername = usernameInput.value.trim();
        const enteredPassword = passwordInput.value.trim();

        // 4. Input Validation Logic
        const isUsernameCorrect = enteredUsername.toLowerCase() === CORRECT_USERNAME.toLowerCase();
        const isPasswordCorrect = enteredPassword === CORRECT_PASSWORD;

        if (isUsernameCorrect && isPasswordCorrect) {
            // SUCCESS
            displayMessage('Login successful! Happy Birthday, Ayala! Redirecting...', 'success');
            
            setTimeout(() => {
                // This line redirects the user to the main index.html page
                window.location.href = SUCCESS_REDIRECT_URL; 
            }, 1500); 

        } else if (enteredUsername === '' || enteredPassword === '') {
            displayMessage('Please enter both your name and the secret code.', 'error');
        } else {
            // FAILURE
            displayMessage('Incorrect name or secret code. Try the hint again!', 'error');
        }
    });

    // --- Helper Functions for Displaying Feedback ---

    function clearMessages() {
        const existingMsg = document.querySelector('.feedback-message');
        if (existingMsg) {
            existingMsg.remove();
        }
    }

    function displayMessage(message, type) {
        clearMessages(); 

        const msgDiv = document.createElement('div');
        msgDiv.className = `feedback-message ${type}`;
        msgDiv.textContent = message;

        loginContainer.insertBefore(msgDiv, loginForm);
    }
});