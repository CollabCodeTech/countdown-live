const $formMenu = document.querySelector('#menu')
const $menu = document.querySelector('.menu')
const $menuIcon = document.querySelector('.menu-icon')

$menuIcon.addEventListener('click', (event) => {
  $menu.classList.toggle('menu_isActive')

  event.preventDefault()
})

$formMenu.addEventListener('submit', function(event) {
  const $minute = this.querySelector('#minute')
  const $second = this.querySelector('#second')
  const $logo = this.querySelector('#logo')
  const $endsongUrl = this.querySelector('#endsongUrl')
  const $background = this.querySelector('#background')
  const $time = this.querySelector('#time')
  const $process = this.querySelector('#process')
  const $backgroundProcess = this.querySelector('#backgroundProcess')

  if($minute.value || $second.value) {
    const minute = $minute.value || 0
    const second = $second.value || 0
    
    resetCountdown(parseInt(minute), parseInt(second))
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

  if($endsongUrl.value) {
    countdown.INITIAL_END_SONG = $endsongUrl.value
  }

  $menu.classList.toggle('menu_isActive')
  event.preventDefault()
})
