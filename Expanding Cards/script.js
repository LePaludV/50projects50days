
const initEvent = () => {
  document.querySelectorAll('.card').forEach((e) => {
    e.addEventListener('click', (event) => {
      if (!e.classList.contains('active')) {
        document.querySelector('.active').classList.remove('active')
        e.classList.add('active')
      }
    })
  })
}
document.addEventListener('DOMContentLoaded', function () {
  initEvent()
})
