
  // Check if the user exists in Local Storage
  var storedUser = localStorage.getItem('username');
  var storedPassword = localStorage.getItem('password');

  document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
  if (username !== storedUser) {
    // User doesn't exist, create a new user and save it in Local Storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    window.location.href = 'home.html';
  } else if (password !== storedPassword) {
    // Incorrect password entered
    document.getElementById('errorMessage').textContent = 'Incorrect password. Please check and try again.';
  } else {
    // User exists and password is correct
    window.location.href = 'home.html';
  }
});
