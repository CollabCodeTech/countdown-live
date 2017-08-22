const $formValues = document.querySelectorAll('.form-value')

let max = $formValues.length
while(max--) {
  $formValues[max].addEventListener('focus', function(event) {
    document.querySelector(`[for="${this.id}"]`).classList.add('form-info_focus')
  })

  $formValues[max].addEventListener('blur', function(event) {
    document.querySelector(`[for="${this.id}"]`).classList.remove('form-info_focus')
  })

  $formValues[max].addEventListener('click', function(event) {
    this.focus()
  })
}