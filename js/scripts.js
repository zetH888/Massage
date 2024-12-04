// Ensure the DOM is fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Select all service cards
  const serviceCards = document.querySelectorAll(".service-card");

  // Loop through each card
  serviceCards.forEach((card) => {
    // Add hover effect on mouse enter
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)"; // Slight enlargement effect
    });

    // Remove hover effect on mouse leave
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)"; // Reset the card size
    });
  });
});

// Dodanie walidacji formularza
document.querySelector("form").addEventListener("submit", (e) => {
  // Pobieranie danych z pól formularza
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  // Sprawdzenie, czy pola są wypełnione
  if (!name || !email) {
    e.preventDefault(); // Zapobiega wysłaniu formularza
    alert("Wypełnij wszystkie pola!");
  }
});
