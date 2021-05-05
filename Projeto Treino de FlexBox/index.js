const line = document.querySelector('.line')
const hmbrgrmenu = document.querySelector('.hmbrgrmenu')
const menumob = document.querySelector('.menumob')
let menuOpen = false

hmbrgrmenu.addEventListener('click', () => {
    if(!menuOpen){        
        line.classList.add('open')
        menumob.style.width = "200px"
        menumob.style.overflow = 'visible'
        menuOpen = true
    } else {        
        line.classList.remove('open')
        menumob.style.width = "0px"
        menumob.style.overflow = 'hidden'
        menuOpen = false
    }
})