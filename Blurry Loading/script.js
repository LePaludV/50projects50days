document.addEventListener('DOMContentLoaded', function () {
  const cpt = document.getElementById('txt')
  const bg = document.getElementById('bg')
  let txt = 100
  const timer = setInterval(() => {
    if (txt === 0) {
      clearInterval(timer)
      cpt.style.opacity = 0
    } else {
      txt--
      cpt.innerText = txt + '%'
      cpt.style.opacity = (txt + 5) / 100
      bg.style.filter = 'blur(' + txt / 3 + 'px)'
    }
  }, 10)
})
