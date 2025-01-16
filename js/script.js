// togle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika list di klik
document.querySelector(".bi-list").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik luar sidebar untuk menghilangkan nav
const list = document.querySelector(".bi-list");

document.addEventListener("click", function (e) {
  if (!list.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// animasi project

function showPopup(title, description) {
  const popup = document.getElementById("popup");
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-description").innerText = description;
  popup.style.display = "flex";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

// Inisialisasi awal
updateCarousel();

// validasi contact me
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && contact && message) {
      alert("Thank you for your message! I will get back to you soon.");
      this.reset(); // Clear form
    } else {
      alert("Please fill out all fields.");
    }
  });
