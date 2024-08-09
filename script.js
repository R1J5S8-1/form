document.body.style.backgroundColor = "#f8f9fa";
const div = querySelector(".custom_container");

// if (div) {
//     div.style.backgroundColor = "#f8f9fa";
//     div.style.borderColor = "#ced4da";
//     div.style.color = "#495057";
// }

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Validate first name
    if (!firstName) {
      setError("firstName");
      isValid = false;
    }

    // Validate last name
    if (!lastName) {
      setError("lastName");
      isValid = false;
    }

    // Validate email
    if (!validateEmail(email)) {
      setError("email");
      isValid = false;
    }

    // Validate phone
    if (!validatePhone(phone)) {
      setError("phone");
      isValid = false;
    }

    // Validate password
    if (!validatePassword(password)) {
      setError("password");
      isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      setError("confirmPassword");
      isValid = false;
    }

    if (isValid) {
      alert("Registration successful!");
      form.reset();
    }
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re = /^\d{10}$/; // Example: 10 digits
    return re.test(phone);
  }

  function validatePassword(password) {
    const re =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return re.test(password);
  }

  function setError(fieldId) {
    document.getElementById(fieldId).classList.add("is-invalid");
  }

  function clearErrors() {
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      input.classList.remove("is-invalid");
    });
  }
});
