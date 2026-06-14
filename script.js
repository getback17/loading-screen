window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader')
    const content = document.getElementById('content')

    loader.style.display = 'none'
    content.style.display = 'block'
  }, 2500)
})
