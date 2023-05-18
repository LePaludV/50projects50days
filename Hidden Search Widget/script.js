document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input')
  const logo = document.getElementById('logo')

  const clickSearch = () => {
    input.classList.toggle('active')
    logo.classList.toggle('activeLogo')
    input.focus()
    input.value = ''
  }
  const keyPressed = (e) => {
    if (e.keyCode === 13 && input.classList.contains('active')) {
      clickSearch()
    }
  }

  logo.addEventListener('click', clickSearch)
  document.addEventListener('keypress', keyPressed)
})
