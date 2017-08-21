const $menu = document.querySelector('.menu')
const $btnDefault = $menu.querySelector('.btn_second')
const menu = new Menu($menu)
menu.default();

const $formMenu = $menu.querySelector('#menu')
const $menuIcon = $menu.querySelector('.menu-icon')

const $menuValues = $menu.querySelectorAll('.menu-value')
const $minute = $menu.querySelector('#minute')
const $second = $menu.querySelector('#second')
const $logo = $menu.querySelector('#logo')
const $endSong = $menu.querySelector('#endSong')
const $background = $menu.querySelector('#background')
const $time = $menu.querySelector('#time')
const $process = $menu.querySelector('#process')
const $processBackground = $menu.querySelector('#processBackground')

document.querySelector('.container').addEventListener('click', function(event) {
  event.preventDefault()
  $menu.classList.remove('menu_isActive')
})

$menuIcon.addEventListener('click', (event) => {
  $menu.classList.toggle('menu_isActive')

  event.preventDefault()
})

let max = $menuValues.length
while(max--) {
  console.log(max)
  $menuValues[max].addEventListener('focus', function(event) {
    document.querySelector(`[for="${this.id}"]`).classList.add('menu-info_focus')
  })

  $menuValues[max].addEventListener('blur', function(event) {
    document.querySelector(`[for="${this.id}"]`).classList.remove('menu-info_focus')
  })
}


$minute.addEventListener('blur', (event) => {
  const minute = $minute.value 
  const second = $second.value

  menu.changeTime(minute, second)
})

$second.addEventListener('blur', () => {
  const minute = $minute.value
  const second = $second.value

  menu.changeTime(minute, second)
})

$logo.addEventListener('blur', () => {
  const src = $logo.value

  menu.changeLogo(src)
})

$endSong.addEventListener('blur', () => {
  const url = $endSong.value
  const start = true

  menu.changeSong(url, start)
})


$background.addEventListener('change', () => {
  const color = $background.value

  menu.changeBackground(color)
})

$time.addEventListener('change', () => {
  const color = $time.value

  menu.changeTimeColor(color)
})

$process.addEventListener('change', () => {
  const color = $process.value

  menu.changeProcessColor(color)
})

$processBackground.addEventListener('change', () => {
  const color = $processBackground.value

  menu.changeProcessBackground(color)
})

$btnDefault.addEventListener('click', (event) => {
  event.preventDefault()
  menu.default()

  $menu.classList.toggle('menu_isActive')
})

$formMenu.addEventListener('submit', function(event) {
  const minute = $minute.value 
  const second = $second.value
  const srcLogo = $logo.value
  const urlSong = $endSong.value
  const backgroundColor = $background.value
  const timeColor = $time.value
  const processColor = $process.value
  const processBackgroundColor = $processBackground.value

  const settings = {
    minute, 
    second, 
    srcLogo, 
    urlSong, 
    backgroundColor, 
    timeColor, 
    processColor, 
    processBackgroundColor
  }

  menu.salvar(settings)

  $menu.classList.toggle('menu_isActive')
  event.preventDefault()
})
