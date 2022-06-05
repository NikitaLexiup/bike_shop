window.onscroll = () => {
  const nav = document.querySelector ('.menu')
  const Y = window.scrollY
  
  if(Y > 100) {
  nav.classList.add ('menu_fixed')
  } else if(Y < 100) {
    nav.classList.remove ('menu_fixed')
    }
}