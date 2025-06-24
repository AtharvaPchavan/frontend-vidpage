const menuButton = document.getElementById("menubar_button")
const sidebar = document.getElementById("sidebar_container");
const pageContent = document.querySelector(".video-gallery");

let isOpen = false;

    menuButton.addEventListener('click', () => {
      isOpen = !isOpen;
      if (isOpen) {
        sidebar.classList.add('open');
        pageContent.classList.add('shift');
      } else {
        sidebar.classList.remove('open');
        pageContent.classList.remove('shift');
      }
    });