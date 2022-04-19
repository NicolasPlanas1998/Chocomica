"use strict"
//  menu responsive
let hambur = document.querySelector('.fa-bars')
let menu = document.querySelector('.first-menu')

hambur.addEventListener('click',dropdown)

function dropdown (e) {
    e.preventDefault()
    menu.classList.toggle('expand')
    hambur.classList.toggle('rotate')
}

// informacion formulario

let nombre = document.getElementsByClassName("inputs__contacto")

let form_btn = document.querySelector(".boton__config--cliente")

form_btn.addEventListener("click", getInfo)

function getInfo(e){
    e.preventDefault()
    let informacion = []
    for(let i=0; i <= 3 ; i++){
            informacion.push(nombre[i].name, nombre[i].value)
            }
    localStorage.setItem('usuario', JSON.stringify(informacion))
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu consulta fue enviada',
        showConfirmButton: false,
        timer: 1500
    })
}