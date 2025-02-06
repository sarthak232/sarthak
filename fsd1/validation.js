function validateForm() {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
  
    // Username validation
    if (username === "") {
      alert("Username cannot be empty.");
      return false;
    }
  
    // Email validation
    const emailRegex = /^[a-zA-Z]+@[a-zA-Z]{3,}\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format.");
      return false;
    }
  
    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be 10 numeric digits.");
      return false;
    }
  
    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must be at least 7 characters long, contain one uppercase letter, one digit, and one special character (&, $, #, @).");
      return false;
    }
  
    // Confirm Password validation
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
  
    alert("Registration successful!");
    return true;
  }
  