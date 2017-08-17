(() => {
  const $countdownTime = document.querySelector(".countdown-time")
  const $countdownProcess = document.querySelector('.process')

  let currentAnimationFrame

  let currentTimeout

  const resetCountdown = (seconds = 180) => {
    if(currentAnimationFrame) cancelAnimationFrame(currentAnimationFrame)
    if(currentTimeout) clearTimeout(currentTimeout)

    let COUNTDOWN_TIME = 1000 * seconds
    let currentProcessSize = 1;
    let countdownCounter = COUNTDOWN_TIME
    let countdownText = formatCountdownTimer(countdownCounter)

    function formatCountdownTimer(countdown){
      const timer = moment(moment.duration(countdown)._data).format("mm:ss")
      const separatorMinuteAndSecond = timer.split(':')

      return `<strong class="countdown-time-minute">${separatorMinuteAndSecond[0]}</strong><span class="countdown-time-separator">:</span>${separatorMinuteAndSecond[1]}`
    }

    currentTimeout = setTimeout(function countdownFn(){
      countdownCounter -= 1000
      countdownText = formatCountdownTimer(countdownCounter)

      currentProcessSize = (countdownCounter / COUNTDOWN_TIME)

      if(countdownCounter > 0){
        currentTimeout = setTimeout(countdownFn, 1000)
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
