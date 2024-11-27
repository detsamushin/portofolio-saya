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
const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

let currentIndex = 0;

function updateCarousel() {
  // Hapus semua class active
  items.forEach((item, index) => {
    item.classList.remove("active");
    if (index === currentIndex) {
      item.classList.add("active"); // Tambahkan active ke item yang dipilih
    }
  });

  // Hitung lebar item dan offset ke tengah
  const itemWidth = items[0].getBoundingClientRect().width; // Lebar tiap item
  const carouselWidth = track.offsetWidth; // Lebar total track carousel
  const offset = carouselWidth / 2 - itemWidth / 2; // Hitung offset untuk tengah

  // Geser track agar item aktif berada di tengah
  track.style.transform = `translateX(calc(${offset}px - ${
    currentIndex * itemWidth
  }px))`;
}

// Tombol sebelumnya
prevButton.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  updateCarousel();
});

// Tombol berikutnya
nextButton.addEventListener("click", () => {
  currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
  updateCarousel();
});

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
