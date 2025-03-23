document.addEventListener("DOMContentLoaded", () => {
  // Sprawdzanie autoryzacji
  function checkAuth() {
    if (!localStorage.getItem("isAuthenticated")) {
      window.location.href = "auth.html";
    }
  }

  // Wywołanie sprawdzenia autoryzacji
  checkAuth();

  // Obsługa przycisku wylogowania
  const logoutButton = document.querySelector(".logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("isAuthenticated");
      window.location.href = "auth.html";
    });
  }

  // Obsługa nagłówka i sekcji
  const header = document.querySelector("header");
  const sections = document.querySelectorAll("section");

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
      rect.bottom >= 0
    );
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    sections.forEach((section) => {
      if (isElementInViewport(section)) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Obsługa menu hamburger
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Zamykanie menu po kliknięciu w link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // Płynne przewijanie do sekcji
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Animacje przy scrollowaniu
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((element) => {
    observer.observe(element);
  });
});
