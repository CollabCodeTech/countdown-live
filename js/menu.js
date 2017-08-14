const $menu = document.querySelector('.menu')
const $menuIcon = document.querySelector('.menu-icon')

$menuIcon.addEventListener('click', (event) => {
  $menu.classList.toggle('menu_isActive')

  event.preventDefault()
})
