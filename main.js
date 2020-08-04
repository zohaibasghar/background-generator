var css=document.querySelector('h3');
var color1=document.querySelector('.color1');
var color2=document.querySelector('.color2');
var bod=document.getElementById('gradient');

function set(){
    bod.style.background='linear-gradient(to right,'+color1.value+','+color2.value+')';
}
color1.addEventListener('input',set());
color2.addEventListener('input',set());
// console.log('background');
// console.clear();