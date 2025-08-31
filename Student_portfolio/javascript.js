document.addEventListener("DOMContentLoaded", () => {

  // Time-based greeting

  const greetEl = document.getElementById("greeting");

  if (greetEl) {

    const h = new Date().getHours();

    let greeting = "My Portfolio";

    if (h >= 5 && h < 12) greeting = "Good Morning 🌅";

    else if (h >= 12 && h < 17) greeting = "Good Afternoon ☀️";

    else if (h >= 17 && h < 21) greeting = "Good Evening 🌇";

    else greeting = "Good Night 🌙";

    greetEl.textContent = greeting;

  }

  // Dark/Light mode toggle

  const themeBtn = document.getElementById("themeToggle");

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

      themeBtn.textContent = "☀️ Light Mode";

    } else {

      themeBtn.textContent = "🌙 Dark Mode";

    }

  });

});