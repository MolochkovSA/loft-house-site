// Nav icon
const navBtn = document.querySelector('.header__nav-btn')
const navIcon = document.querySelector('.nav-icon')
const headerTopRow = document.querySelector('.header__top-row')

navBtn.onclick = function () {
  navIcon.classList.toggle('nav-icon--active')
  headerTopRow.classList.toggle('header__top-row--mobile')
  document.body.classList.toggle('no-scroll')
}

// Phone mask
mask('[data-tel-input]')

let phoneInputs = document.querySelectorAll('[data-tel-input]')

phoneInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value === '+') input.value = ''
  })
  input.addEventListener('blur', () => {
    if (input.value === '+') input.value = ''
  })
})
