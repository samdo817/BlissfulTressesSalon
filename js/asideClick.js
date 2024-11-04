function asideClick() {
  const aside = document.getElementById("aside");
  aside.classList.toggle("hidden");
}

function toggleDropdown(event) {
  event.preventDefault(); // Mencegah tautan default
  const dropdown = event.currentTarget.nextElementSibling;
  dropdown.classList.toggle("hidden");
}

// Menutup dropdown ketika pengguna mengklik di luar menu
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("dropdown-menu");
  const isClickInside =
    dropdown.contains(event.target) ||
    event.target.closest("a[href='#service']");
  if (!isClickInside) {
    dropdown.classList.add("hidden");
  }
});
