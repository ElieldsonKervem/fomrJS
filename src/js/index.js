import listOfLayoutLabel from "./listOflayoutLabel.js";

let layoutLabel = document.querySelector('.layoutLabel');
let layoutDot = document.querySelectorAll('.dot');
console.log(layoutDot)
let userEmail = document.querySelector('.userEmail')
let phraselist = listOfLayoutLabel;
let index = 0;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


userEmail.addEventListener('focusout', () => {
    const emailValue = userEmail.value; // Pega o valor do input
    if (!emailRegex.test(emailValue)) {
        alert('email invalido')
    } else {
        console.log('Email válido');
    }
});

function updateLabel() {
    layoutLabel.classList.add('hidden');

    setTimeout(() => {
        layoutLabel.innerHTML = phraselist[index];
        layoutDot.forEach(dot => dot.classList.remove('pink'));
        index = (index + 1) % phraselist.length;
        layoutDot[index].classList.add('pink');
        layoutLabel.classList.remove('hidden');
    }, 500);
    
   
    setTimeout(updateLabel, 2000); 
}

updateLabel(); 