var css=document.querySelector('h3');
var clr1=document.querySelector('.color1');
var clr2=document.querySelector('.color2');
var body=document.querySelector('body');

function set(){
    body.style.background=
    'linear-gradient(to right(,'+clr1.value+','+clr2.value+')';
    css.textContent=body.style.background
}
clr1.addEventListener('input',set());
clr2.addEventListener('input',set());
