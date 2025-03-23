function checkAuth() {
  const isAuthorized = localStorage.getItem("isAuthorized");
  if (!isAuthorized) {
    window.location.href = "auth.html";
  }
}

function authorize(password) {
  if (password === "filip") {
    localStorage.setItem("isAuthorized", "true");
    window.location.href = "index.html";
  } else {
    alert("Nieprawidłowe hasło dostępu.");
  }
}

function logout() {
  localStorage.removeItem("isAuthorized");
  window.location.href = "auth.html";
}

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

    if (password === "filip") {
      localStorage.setItem("isAuthenticated", "true");
      window.location.href = "index.html";
    } else {
      errorMessage.textContent = "Nieprawidłowe hasło. Spróbuj ponownie.";
      passwordInput.value = "";
    }
  });
});
