// Sprawdzanie autoryzacji przy wejściu na stronę
if (window.location.pathname.includes("auth.html")) {
  // Jeśli jesteśmy na stronie logowania i jesteśmy już zalogowani, przekieruj do głównej
  if (localStorage.getItem("isAuthenticated") === "true") {
    window.location.href = "index.html";
  }
} else {
  // Jeśli jesteśmy na innej stronie i nie jesteśmy zalogowani, przekieruj do logowania
  if (localStorage.getItem("isAuthenticated") !== "true") {
    window.location.href = "auth.html";
  }
}

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
