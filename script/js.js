let icono=document.querySelector('.main header .icono')

icono.addEventListener('click', ()=>{
    icono.classList.toggle('change')
    let nav=document.querySelector('.main header .nav')
    nav.classList.toggle('showNav')
})