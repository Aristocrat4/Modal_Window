'use strict';

const popup = document.querySelector('.popup');
const overlay = document.querySelector('.overlay');
const openpop = document.querySelectorAll('.btn');
const closePop = document.querySelector('.close-pop');
const closingFunc = function (){
    popup.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openingFunc = function () {
    popup.classList.remove('hidden');
    overlay.classList.remove ('hidden');
}

for (let i = 0; i < openpop.length; i++) {
    openpop[i].addEventListener('click', openingFunc)
}
closePop.addEventListener('click', closingFunc)
overlay.addEventListener('click', closingFunc)

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') {
        if(!popup.classList.contains('hidden')){
            closingFunc();
        }
    }
})