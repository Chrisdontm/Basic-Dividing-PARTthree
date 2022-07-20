
let PRESET = document.querySelector('#PRESET');
let INCHES_IN_TANK = document.querySelector('#INCHES_IN_TANK');
let btnDivide = document.querySelector('button');
let output = document.querySelector('h2');


btnDivide.addEventListener('click', () =>{
    let click = parseInt(PRESET.value) / parseInt(INCHES_IN_TANK.value);    
    output.innerText = click;    
});