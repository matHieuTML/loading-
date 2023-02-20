'use strict';

let compteurKillian = 0;
let anim = setInterval(() => {
    const elNumber = document.querySelector('.number');
    const elNumberValue = Number(elNumber.getAttribute('data-value'));
    if (compteurKillian !== elNumberValue) 
    {
        compteurKillian++;
        elNumber.textContent = `${compteurKillian}%`;
        
    }else {
        clearInterval(anim);
    }
}, 50);