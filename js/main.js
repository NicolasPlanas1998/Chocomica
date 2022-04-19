hambur = document.querySelector('.fa-bars')
menu = document.querySelector('.first-menu')

hambur.addEventListener('click',dropdown)

function dropdown (e) {
    e.preventDefault(e)
    menu.classList.toggle('expand')
    hambur.classList.toggle('rotate')
}