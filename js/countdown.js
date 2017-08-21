const countdown = (() => {
  const $countdownTime = document.querySelector(".countdown-time")
  const $countdownProcess = document.querySelector('.process')
  let INITIAL_END_SONG = 'https://www.myinstants.com/media/sounds/buzina-trem-araponga-que-porrada-na-orelha.mp3'

  let currentAnimationFrame

  let currentTimeout

  function endSound() {
    endAudio = new Audio(countdown.INITIAL_END_SONG)
    endAudio.play()
  }

  const resetCountdown = (minutes = 0, seconds = 180) => {
    if(currentAnimationFrame) cancelAnimationFrame(currentAnimationFrame)
    if(currentTimeout) clearTimeout(currentTimeout)

    const time = seconds + (minutes * 60)
    let COUNTDOWN_TIME = 1000 * time
    let currentProcessSize = 1;
    let countdownCounter = COUNTDOWN_TIME
    let countdownText = formatCountdownTimer(countdownCounter)

    function formatCountdownTimer(countdown){
      const timer = moment.duration(countdown)
      let outMinute = parseInt(timer.asMinutes())
      const outSecond = moment(timer._data).format('ss')
        
      if(outMinute.toString().length == 1) {
        outMinute = '0' + outMinute
      }

      return `<strong class="countdown-time-minute">${outMinute}</strong><span class="countdown-time-separator">:</span>${outSecond}`
    }

    currentTimeout = setTimeout(function countdownFn(){
      countdownCounter -= 1000
      countdownText = formatCountdownTimer(countdownCounter)

      currentProcessSize = (countdownCounter / COUNTDOWN_TIME)

      if(countdownCounter > 0){
        currentTimeout = setTimeout(countdownFn, 1000)
      } else {
        endSound()
      }
    }, 1000)

    currentAnimationFrame = requestAnimationFrame(function raf(){
      $countdownTime.innerHTML = countdownText
      $countdownProcess.style.transform = `scaleX(${currentProcessSize})`

      if(countdownCounter > 0){
        currentAnimationFrame = requestAnimationFrame(raf)
      }
    })
  }

  resetCountdown()

  window.resetCountdown = resetCountdown
  return {
    INITIAL_END_SONG,
    resetCountdown,
    endSound
  }
})()
