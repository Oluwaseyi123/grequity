console.log(innerWidth)

const navIcon = document.querySelector('.nav-icon')

navIcon.addEventListener('click', showMenu)

function showMenu(e){
    console.log(e)
    
    if(e.clientX <= 1055){
        const navUL = document.querySelector('.nav-left')
        navUL.classList.toggle('showNav')
        console.log('bla')
        console.log(navUL)
    }
    
}