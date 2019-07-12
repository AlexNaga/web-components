const sideMenuBtn = document.querySelector('#open-side-menu-btn');
const sideMenu = document.querySelector('pn-side-menu');
sideMenuBtn.addEventListener('click', () => {
  if (!sideMenu.open) {
    sideMenu.open = true;
  }
})