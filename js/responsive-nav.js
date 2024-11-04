// Menambahkan event listener pada window untuk mendeteksi scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const scrollPosition = window.scrollY;

  // Jika posisi scroll lebih dari 50px, kurangi padding navbar
  if (scrollPosition > 10) {
    navbar.classList.remove("top-5"); // Menghapus padding besar
    navbar.classList.add("top-0"); // Menambahkan padding kecil
  } else {
    navbar.classList.remove("top-0"); // Menghapus padding kecil
    navbar.classList.add("top-5"); // Menambahkan padding besar
  }
});
function openSidebar() {
  document.getElementById("sidebar").classList.remove("hidden");
}
function closeSidebar() {
  document.getElementById("sidebar").classList.add("hidden");
}
const navbar = document.getElementById("navbar");
let lastScrollY = window.scrollY;

// Hilangkan navbar ketika link navbar ditekan
document.querySelectorAll("#navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    if (link.getAttribute("href") !== "#service") {
      navbar.classList.add("navbar-hidden");
    }
  });
});

// Munculkan navbar lagi ketika halaman di-scroll
window.addEventListener("scroll", () => {
  if (window.scrollY < lastScrollY) {
    // Scroll ke atas, munculkan navbar
    navbar.classList.remove("navbar-hidden");
  } else {
    // Scroll ke bawah, sembunyikan navbar
    navbar.classList.add("navbar-hidden");
  }
  lastScrollY = window.scrollY;
});

const searchIcon = document.getElementById("searchIcon");
const searchBox = document.getElementById("searchBox");
const closeIcon = document.getElementById("closeIcon");

// Tampilkan search box saat ikon pencarian diklik
searchIcon.addEventListener("click", () => {
  searchBox.classList.remove("hidden"); // Tampilkan search box
});

// Sembunyikan search box saat ikon close diklik
closeIcon.addEventListener("click", () => {
  searchBox.classList.add("hidden"); // Sembunyikan search box
});
