document.addEventListener("DOMContentLoaded", () => {
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
  const body = document.body;

  const toggleMenu = (show) => {
    hamburger.classList.toggle("active", show);
    navLinks.classList.toggle("active", show);
    body.style.overflow = show ? "hidden" : "";
  };

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isActive = navLinks.classList.contains("active");
      toggleMenu(!isActive);
    });

    // Zamykanie menu po kliknięciu w link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Zamykamy menu
          toggleMenu(false);

          // Przewijamy do sekcji
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });

    // Zamykanie menu po kliknięciu poza menu
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Zamykanie menu po naciśnięciu ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navLinks.classList.contains("active")) {
        toggleMenu(false);
      }
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
