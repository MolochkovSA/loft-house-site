// Nav icon
const navBtn = document.querySelector('.header__nav-btn')
const navIcon = document.querySelector('.nav-icon')
const headerTopRow = document.querySelector('.header__top-row')

navBtn.onclick = function () {
  navIcon.classList.toggle('nav-icon--active')
  headerTopRow.classList.toggle('header__top-row--mobile')
  document.body.classList.toggle('no-scroll')
}
