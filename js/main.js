document.addEventListener("DOMContentLoaded", () => {

  // ===== NAVBAR SCROLL SHADOW =====
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 10);
    }, { passive: true });
  }

  // ===== HAMBURGER MENU =====
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileOverlay = document.querySelector(".mobile-overlay");

  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    mobileOverlay.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  if (hamburger && mobileMenu && mobileOverlay) {
    hamburger.addEventListener("click", toggleMenu);
    mobileOverlay.addEventListener("click", toggleMenu);

    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (mobileMenu.classList.contains("open")) toggleMenu();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
        toggleMenu();
      }
    });
  }

  // ===== SCROLL FADE-IN =====
  const fadeElements = document.querySelectorAll(".fade-in");
  if (fadeElements.length > 0 && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    fadeElements.forEach(el => el.classList.add("visible"));
  }

  // ===== FAQ ACCORDION =====
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      question.setAttribute("aria-expanded", isOpen);

      if (isOpen) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = "0";
      }

      faqItems.forEach(other => {
        if (other !== item && other.classList.contains("open")) {
          other.classList.remove("open");
          other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
          other.querySelector(".faq-answer").style.maxHeight = "0";
        }
      });
    });
  });

});
