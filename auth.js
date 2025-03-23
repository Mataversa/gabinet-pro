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
