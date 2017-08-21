(() => {
  const $countdownTime = document.querySelector(".countdown-time")
  const $countdownProcess = document.querySelector('.process')

  let currentAnimationFrame

  let currentTimeout

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
      const outMinute = parseInt(timer.asMinutes())
      const outSecond = moment(timer._data).format('ss')

      return `<strong class="countdown-time-minute">${outMinute}</strong><span class="countdown-time-separator">:</span>${outSecond}`
    }

    function countdownEnd() {
      endAudio = new Audio('https://www.myinstants.com/media/sounds/buzina-trem-araponga-que-porrada-na-orelha.mp3')
      endAudio.play()
    }

    currentTimeout = setTimeout(function countdownFn(){
      countdownCounter -= 1000
      countdownText = formatCountdownTimer(countdownCounter)

      currentProcessSize = (countdownCounter / COUNTDOWN_TIME)

      if(countdownCounter > 0){
        currentTimeout = setTimeout(countdownFn, 1000)
      } else {
        countdownEnd()
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

})()
