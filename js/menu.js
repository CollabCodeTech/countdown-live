const $formMenu = document.querySelector('#menu')
const $menu = document.querySelector('.menu')
const $menuIcon = document.querySelector('.menu-icon')

$menuIcon.addEventListener('click', (event) => {
  $menu.classList.toggle('menu_isActive')

  event.preventDefault()
})

$formMenu.addEventListener('submit', function(event) {
  const $second = this.querySelector('#second')
  const $background = this.querySelector('#background')
  const $time = this.querySelector('#time')

  if($second.value) {
    COUNTDOWN_TIME = 1000 * parseInt($second.value)
    countdownCounter = COUNTDOWN_TIME
  }

  if($background.value) {
    document.body.style.backgroundColor = $background.value
  }

  if($time.value) {
    document.querySelector('.countdown-time').style.color = $time.value
  }


  $menu.classList.toggle('menu_isActive')
  event.preventDefault()
})
