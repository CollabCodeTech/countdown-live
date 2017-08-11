const $countdown = document.querySelector(".countdown-time")
const COUNTDOWN_TIME = 1000 * 60 * 3

let countdownCounter = COUNTDOWN_TIME
let countdownText = formatCountdownTimer(countdownCounter)

function formatCountdownTimer(countdown){
  let seilah = moment(moment.duration(countdown)._data).format("mm:ss")
  let coisa = seilah.split(':')

  return `<strong>${coisa[0]}</strong><span>:</span>${coisa[1]}`
}

setTimeout(function countdownFn(){
  countdownCounter -= 1000
  countdownText = formatCountdownTimer(countdownCounter)
  if(countdownCounter > 0){
    setTimeout(countdownFn, 1000)
  }
}, 1000)

requestAnimationFrame(function raf(){
  $countdown.innerHTML = countdownText
  if(countdownCounter > 0){
    requestAnimationFrame(raf)
  }
})
