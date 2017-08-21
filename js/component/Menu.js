class Menu {
  constructor($menu) {
    this.$menu = $menu
  }

  updateAll(settings = {}) {
    this.changeTime(settings.minute, settings.second)
    this.changeLogo(settings.srcLogo)
    this.changeSong(settings.urlSong)
    this.changeBackground(settings.backgroundColor)
    this.changeTimeColor(settings.timeColor)
    this.changeProcessColor(settings.processColor)
    this.changeProcessBackground(settings.processBackgroundColor)
  }

  changeTime(minute, second) {
    const min = minute || 0
    const sec = second || 0

    resetCountdown(parseInt(min), parseInt(sec))
  }

  changeLogo(src = settingsMenuDefault.srcLogo, alt = settingsMenuDefault.altLogo) {
    const $logo = document.querySelector('.countdown-logo')
    $logo.src = src || ''
    $logo.alt = alt || ''
  }

  changeSong(url = settingsMenuDefault.urlSong, start = settingsMenuDefault.startSong) {
    countdown.INITIAL_END_SONG = url || ''

    if(start) {
      countdown.endSound()
    }
  }

  changeBackground(color = settingsMenuDefault.backgroundColor) {
    document.body.style.backgroundColor = color
  }

  changeTimeColor(color = settingsMenuDefault.timeColor) {
    document.querySelector('.countdown-time').style.color = color
  }

  changeProcessColor(color = settingsMenuDefault.processColor) {
    document.querySelector('.process').style.backgroundColor = color
  }

  changeProcessBackground(color = settingsMenuDefault.processBackgroundColor) {
    document.querySelector('.wrap-process').style.backgroundColor = color
  }

  salvar(settings) {
    this.updateAll(settings)
  }

  default() {
    const settings = {
      minute: 3,
      second: 0
    }

    this.updateAll(settings)
  }
}