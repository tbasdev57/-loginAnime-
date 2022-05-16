let btn = document.querySelector('.btn')
let btnSlide = document.querySelector('.btnSlide')
let form1 = document.querySelector('.form1')
let form2 = document.querySelector('.form2')
let login = document.querySelector('.login')
let inscr = document.querySelector('.inscr')

btnSlide.addEventListener('click', () => {
    let l = btn.style.left
    btn.style.left = (l == "" || l == "0px") ? '120px' : '0px'
    form1.style.left = (l == "" || l == "0px") ? '0px' : "-300px"
    form2.style.left = (l == "" || l == "0px") ? '300px' : "0px"
    login.style.color = (l == "" || l == "0px") ? 'black' : "white"
    inscr.style.color = (l == "" || l == "0px") ? 'white' : "black"
})