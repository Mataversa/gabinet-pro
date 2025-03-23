function checkAuth() {
  const isAuthorized = localStorage.getItem("isAuthorized");
  if (!isAuthorized) {
    window.location.href = "auth.html";
  }
}

function authorize(password) {
  if (password === "gabinetpro2024") {
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
