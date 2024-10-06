// Function to load the user dashboard
function loadDashboard(user) {
  // Redirect based on username
  switch (user.username) {
      case 'vidyavyshnavi':
          window.location.href = 'vidya.html';
          break;
      case 'deepika':
          window.location.href = 'deepika.html';
          break;
      case 'shawana':
          window.location.href = 'shawana.html';
          break;
      case 'likitha':
          window.location.href = 'likhita.html';
          break;
      case 'akshitha':
          window.location.href = 'akshitha.html';
          break;
      case 'jyoshika':
          window.location.href = 'jyoshika.html';
          break;
      default:
          alert("No dashboard available for this user.");
  }
}

// Function to load the login form
function loadLogin() {
  document.querySelector('.content').innerHTML = `
    <div class="wrapper">
      <h1>Login</h1>
      <form id="loginForm">
        <div class="input">
          <label for="username">Username:</label>
          <div>
            <i class="fas fa-user"></i>
            <input type="text" id="username" name="username" placeholder="Enter your username" required>
          </div>
        </div>
        <div class="input">
          <label for="password">Password:</label>
          <div>
            <i class="fas fa-lock"></i>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>
          </div>
        </div>
        <div class="remember">
          <label>
            <input type="checkbox"> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
      <div class="register">
        <p>Don't have an account? </p>
        <label>
        <a href="register.html">Sign Up</a>
        </label>
      </div>
    </div>
  `;

  // Add event listener for form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting in the traditional way
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Fetch user data from the API
      fetch("https://script.google.com/macros/s/AKfycbxZ8l2R3E2oY8kRe_9SVKhP3v4w3fpFk5PGncSzb22fdU6RgHi9-gdo7OpA5UHfvLL8Yg/exec")
          .then(response => response.json())
          .then(data => {
              // Check if the entered credentials match any user
              const user = data.find(user => user.username === username && user.password === password);
              
              if (user) {
                  // Load the dashboard with user details
                  loadDashboard(user);
              } else {
                  alert("Invalid username or password.");
              }
          })
          .catch(error => {
              console.error("Error fetching the API:", error);
              alert("Failed to authenticate. Please try again later.");
          });
  });
}

// Call loadLogin when the page loads
window.onload = function() {
  loadLogin();
};