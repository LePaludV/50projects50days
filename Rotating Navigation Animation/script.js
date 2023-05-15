let btnOpen
let btnClose
let menu
let content

const open = () => {
  btnOpen.className = 'hidden'
  btnClose.className = 'visible'
  menu.style.display = ''
  console.log(content)
  content.classList.add('rotate')
}

const close = () => {
  btnOpen.className = 'visible'
  btnClose.className = 'hidden'
  menu.style.display = 'none'
  content.classList.remove('rotate')
}

document.addEventListener('DOMContentLoaded', () => {
  btnOpen = document.getElementById('open')
  btnClose = document.getElementById('close')
  menu = document.getElementById('menu')
  content = document.getElementById('content')
  menu.style.display = 'none'
  btnOpen.className = 'visible'
  btnClose.className = 'hidden'
  btnOpen.addEventListener('click', open)
  btnClose.addEventListener('click', close)
})
