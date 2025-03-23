document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("errorMessage");

  // Sprawdź czy użytkownik jest już zalogowany
  if (localStorage.getItem("isAuthenticated") === "true") {
    window.location.href = "index.html";
    return;
  }

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const password = passwordInput.value;

    if (password === "gabinet") {
      localStorage.setItem("isAuthenticated", "true");
      window.location.href = "index.html";
    } else {
      errorMessage.textContent = "Nieprawidłowe hasło. Spróbuj ponownie.";
      passwordInput.value = "";
    }
  });
});

function checkPassword() {
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  if (password === "gabinet") {
    localStorage.setItem("isAuthenticated", "true");
    window.location.href = "index.html";
  } else {
    errorMessage.textContent = "Nieprawidłowe hasło. Spróbuj ponownie.";
    document.getElementById("password").value = "";
  }
}
