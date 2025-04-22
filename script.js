console.log("  𝓙𝓪𝓷𝓽𝓪 𝓖𝓸𝓮𝓼 𝓒𝓻𝓪𝔃𝔂");

// 🌗 Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
toggle?.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  
  // Optional: Save dark mode preference in local storage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.removeItem("darkMode");
  }
});

// 🌑 Check dark mode preference on load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
}

// 🔍 Live Search (Simple)
const searchInput = document.getElementById("searchInput");
searchInput?.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const articles = document.querySelectorAll(".article-card");

  // Hide or show articles based on search query
  articles.forEach(article => {
    const text = article.textContent.toLowerCase();
    article.style.display = text.includes(query) ? "block" : "none";
  });

  // Show all articles if input is empty
  if (query === "") {
    articles.forEach(article => article.style.display = "block");
  }
});

// 📬 Newsletter Form Submit (prevent reload)
const newsletterForm = document.querySelector(".newsletter form");
newsletterForm?.addEventListener("submit", e => {
  e.preventDefault();
  const email = newsletterForm.querySelector("input").value;

  // Simple email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
    alert(Thanks for subscribing, ${email}! ✨);
    newsletterForm.reset();
  } else {
    alert("Please enter a valid email address!");
  }
});