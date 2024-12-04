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
