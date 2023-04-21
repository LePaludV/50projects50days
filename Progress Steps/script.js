let isNextEnabled = true
let isPrevEnabled = false
let cpt = 1
let nbCicles
const clickPrevious = () => {
  const active = document.querySelectorAll('.active')

  if (isPrevEnabled && active.length !== 0) {
    cpt--
    isNextEnabled = true
    document.querySelector('#next').classList?.remove('disabled')
    active.item(active.length - 1).classList.remove('active')
    document.querySelector('.front').style.width = ((active.length - 2) / (nbCicles - 1)) * 80 + '%'
  }
  if (cpt === 1) {
    isPrevEnabled = false
    document.querySelector('#previous').classList.add('disabled')
  }
}
const clickNext = () => {
  const nbActive = document.querySelectorAll('.active').length
  const circles = document.querySelectorAll('.circle')
  if (isNextEnabled && nbActive < nbCicles) {
    cpt++
    isPrevEnabled = true
    document.querySelector('#previous').classList?.remove('disabled')
    circles.item(nbActive).classList.add('active')
    document.querySelector('.front').style.width = ((nbActive) / (nbCicles - 1)) * 80 + '%'
  }
  if (cpt === nbCicles) {
    isNextEnabled = false
    document.querySelector('#next').classList.add('disabled')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('previous').addEventListener('click', clickPrevious)
  document.getElementById('next').addEventListener('click', clickNext)
  nbCicles = document.querySelectorAll('.circle').length
})
