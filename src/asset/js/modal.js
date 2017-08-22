((doc) => {
  const $modal = doc.querySelector('.modal')
  const $modalAction = doc.querySelector('.modal-action')
  const $modalActionValue = $modalAction.querySelector('.modal-action-value')
  const $modalActionOutput = $modalAction.querySelector('.modal-action-output')
  const valueInitialOutput = $modalActionOutput.value
  const $modalActionWarm = $modalAction.querySelector('.modal-action-warm')
  let valueInitialWarm = $modalActionWarm.textContent

  window.addEventListener('load', () => {
    updateModalActionWarm()
  })

  $modal.addEventListener('click', function(event) {
    this.classList.remove('modal_isActive')
  })

  $modalAction.addEventListener('click', (event) => {
    event.cancelBubble = true
  })

  $modalActionValue.addEventListener('keydown', (event) => {
    const isNumberOrLetter = /^[0-9A-Za-z]$/
    
    if(parseInt($modalActionValue.value.length) >= valueInitialWarm 
        && isNumberOrLetter.exec(event.key) 
        && !isTextSelected($modalActionValue)) {
      event.preventDefault()
    }

    if(event.key == 'Backspace') {
      updateModalActionWarm()
    }
  })

  $modalActionValue.addEventListener('keyup', () => {
    updateModalActionWarm()
  })

  function updateModalActionWarm() {
    if(parseInt($modalActionValue.value.length) <= valueInitialWarm) {
      $modalActionOutput.innerHTML = `${valueInitialOutput}<strong>${$modalActionValue.value}</strong>`
      $modalActionWarm.textContent = valueInitialWarm - $modalActionValue.value.length
    }
  }

  function isTextSelected($element) {
    if (typeof $element.selectionStart == "number") {
        return $element.selectionStart == 0 && $element.selectionEnd == $element.value.length;
    } else if (typeof document.selection != "undefined") {
        $element.focus();
        return document.selection.createRange().text == $element.value;
    }
  }
    
})(document)