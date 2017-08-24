((doc) => {
  const $modal = doc.querySelector('.modal')
  const $modalAction = $modal.querySelector('.modal-action')
  const $modalActionValue = $modalAction.querySelector('.modal-action-value')
  const $modalActionOutput = $modalAction.querySelector('.modal-action-output')
  const valueInitialOutput = $modalActionOutput.value
  const $modalActionWarm = $modalAction.querySelector('.modal-action-warm')
  let valueInitialWarm = $modalActionWarm.textContent
  const $modalActionBtn = $modalAction.querySelector('.modal-action-btn')

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
    updateBtnDisabled()
  })

  $modalAction.addEventListener('submit', (event) => {
    event.preventDefault()

    $modal.classList.add('modal_isCreating')

    const settingsTime = {
      minute: 3, 
      second: 0, 
      srcLogo: 'https://imgur.com/download/kjWzqUd',
      altLog: 'Logo do CollabCode',
      urlSong: 'https://www.myinstants.com/media/sounds/buzina-trem-araponga-que-porrada-na-orelha.mp3',
      startSong: false,
      backgroundColor: '#FFFFFF', 
      timeColor: '#F36A7E', 
      processColor: '#C3C5C6', 
      processBackgroundColor: '#F2F3F3'
    }

    fetch('http://localhost:3000/url', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify(settingsTime)
    })
  })

  $modal.addEventListener('transitionend', (event) => {
    if(event.pseudoElement && $modal.classList.contains('modal_isDone')) {
      $modal.classList.remove('modal_isActive', 'modal_isCreating', 'modal_isDone')
    }
    if(event.pseudoElement && $modal.classList.contains('modal_isCreating')) {
      $modal.classList.remove('modal_isCreating')
      $modal.classList.add('modal_isDone')
    }
  })

  function updateModalActionWarm() {
    if(parseInt($modalActionValue.value.length) <= valueInitialWarm) {
      $modalActionOutput.innerHTML = `${valueInitialOutput}<strong>${$modalActionValue.value}</strong>`
      $modalActionWarm.textContent = valueInitialWarm - $modalActionValue.value.length
    }
  }

  function updateBtnDisabled() {
    if($modalActionValue.value.length != 0) {
      $modalActionBtn.removeAttribute('disabled')
    } else {
      $modalActionBtn.setAttribute('disabled', true)
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