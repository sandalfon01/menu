const menuTuggle=document.querySelector('.menuToggle')
const navegation=document.querySelector('.navegation')

menuTuggle.onclik=function(){
    navegation.classList.toggle('open')
}