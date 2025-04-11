window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".picture-cake");
  const contactText = document.querySelector(".contact_text");
  const containerForm = document.querySelector(".container_form");
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const windowHeight = window.innerHeight;

  // Vérification pour chaque élément de la classe .picture-cake
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop <= windowHeight) {
      element.classList.add("is-visible");
    } else {
      element.classList.remove("is-visible");
    }
  });
  // Vérification si le texte de contact entre dans la vue
  const contactTextTop = contactText.getBoundingClientRect().top;
  if (contactTextTop <= windowHeight) {
    contactText.classList.add("is-visible");
  } else {
    contactText.classList.remove("is-visible");
  }
  // Vérification si le formulaire entre dans la vue
  const containerFormTop = containerForm.getBoundingClientRect().top;
  if (containerFormTop <= windowHeight) {
    containerForm.classList.add("is-visible");
  } else {
    containerForm.classList.remove("is-visible");
  }
});
// Affiche ou cache le bouton en fonction du défilement
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
