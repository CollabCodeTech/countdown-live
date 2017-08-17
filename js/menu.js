const $formMenu = document.querySelector('#menu')
const $menu = document.querySelector('.menu')
const $menuIcon = document.querySelector('.menu-icon')

$menuIcon.addEventListener('click', (event) => {
  $menu.classList.toggle('menu_isActive')

  event.preventDefault()
})

$formMenu.addEventListener('submit', function(event) {
  const $second = this.querySelector('#second')
  const $logo = this.querySelector('#logo')
  const $background = this.querySelector('#background')
  const $time = this.querySelector('#time')
  const $process = this.querySelector('#process')
  const $backgroundProcess = this.querySelector('#backgroundProcess')

  if($second.value) {
    resetCountdown(parseInt($second.value))
  }

  if($logo.value) {
    document.querySelector('.countdown-logo').src = $logo.value
  }

  if($background.value) {
    document.body.style.backgroundColor = $background.value
  }

  if($time.value) {
    document.querySelector('.countdown-time').style.color = $time.value
  }

  if($process.value) {
    document.querySelector('.process').style.backgroundColor = $process.value
  }

  if($backgroundProcess.value) {
    document.querySelector('.wrap-process').style.backgroundColor = $backgroundProcess.value
  }

  $menu.classList.toggle('menu_isActive')
  event.preventDefault()
})
