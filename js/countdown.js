const $countdownTime = document.querySelector(".countdown-time")
const $countdownProcess = document.querySelector('.process')

let COUNTDOWN_TIME = 1000 * 180
let currentProcessSize = 1;
let countdownCounter = COUNTDOWN_TIME
let countdownText = formatCountdownTimer(countdownCounter)

function formatCountdownTimer(countdown){
  const timer = moment(moment.duration(countdown)._data).format("mm:ss")
  const separatorMinuteAndSecond = timer.split(':')

  return `<strong class="countdown-time-minute">${separatorMinuteAndSecond[0]}</strong><span class="countdown-time-separator">:</span>${separatorMinuteAndSecond[1]}`
}

setTimeout(function countdownFn(){
  countdownCounter -= 1000
  countdownText = formatCountdownTimer(countdownCounter)

  currentProcessSize = (countdownCounter / COUNTDOWN_TIME)

  if(countdownCounter > 0){
    setTimeout(countdownFn, 1000)
  }
}, 1000)

requestAnimationFrame(function raf(){
  $countdownTime.innerHTML = countdownText
  $countdownProcess.style.transform = `scaleX(${currentProcessSize})`

  if(countdownCounter > 0){
    requestAnimationFrame(raf)
  }
})
