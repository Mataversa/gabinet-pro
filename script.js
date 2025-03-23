document.addEventListener("DOMContentLoaded", () => {
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

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });

  // Sprawdzanie autoryzacji
  function checkAuth() {
    if (!localStorage.getItem("isAuthenticated")) {
      window.location.href = "auth.html";
    }
  }

  // Wywołanie sprawdzenia autoryzacji przy załadowaniu strony
  document.addEventListener("DOMContentLoaded", function () {
    checkAuth();

    // Dodanie obsługi przycisku wylogowania
    const logoutButton = document.querySelector(".logout-button");
    if (logoutButton) {
      logoutButton.addEventListener("click", function () {
        localStorage.removeItem("isAuthenticated");
        window.location.href = "auth.html";
      });
    }

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
});
