// script.js

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const message = document.getElementById("message");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = username.value.trim();
    const pass = password.value.trim();

    if (user === "" || pass === "") {
      message.textContent = "Please fill in all fields.";
      message.style.color = "red";
      return;
    }

    // Example login credentials
    if (user === "admin" && pass === "12345") {
      message.textContent = "Login successful!";
      message.style.color = "green";

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    } else {
      message.textContent = "Invalid username or password.";
      message.style.color = "red";
    }
  });
});
