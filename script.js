const menuButton = document.getElementById("menubar_button")
const sidebar = document.getElementById("sidebar_container");

let isOpen = false;

menuButton.addEventListener('click', () => {
  if (isOpen) {
    sidebar.classList.remove('open');
    sidebar.classList.add('close');
  } else {
    sidebar.classList.add('open');
    sidebar.classList.remove('close');
  }
  isOpen = !isOpen;
});