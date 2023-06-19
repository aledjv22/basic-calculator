const body = document.querySelector('body');

//HEADER
const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.classList.add('title');
h1.innerText = 'Basic Calculator';
header.insertBefore(h1, header.firstChild);
body.insertBefore(header, body.firstChild);

//MAIN
const main = document.createElement('main');
main.classList.add('calcu');
body.appendChild(main);
const p = document.createElement('p');
p.classList.add('info');
p.innerText = `This page is about a prototype of a basic calculator which calculates
addition, subtraction, product and division of the entered numbers.`
main.appendChild(p);

//div numbers
const numbers = document.createElement('div');
numbers.classList.add('numbers');
main.appendChild(numbers);

const div_first_number = document.createElement('div');
numbers.appendChild(div_first_number);
const label_first_number = document.createElement('label');
label_first_number.innerText = 'First number: ';
label_first_number.classList.add('first');
label_first_number.setAttribute('for','first');
div_first_number.appendChild(label_first_number);
const input_first_number = document.createElement('input');
input_first_number.setAttribute('type','text');
input_first_number.setAttribute('id','first');
div_first_number.appendChild(input_first_number);

const div_second_number = document.createElement('div');
numbers.appendChild(div_second_number);
const label_second_number = document.createElement('label');
label_second_number.innerText = 'Second number: ';
label_second_number.classList.add('second');
label_second_number.setAttribute('for','second');
div_second_number.appendChild(label_second_number);
const input_second_number = document.createElement('input');
input_second_number.setAttribute('type','text');
input_second_number.setAttribute('id','second');
div_second_number.appendChild(input_second_number);



//calculos
let first = document.querySelector('#first');
let second = document.querySelector('#second');
let resul = document.querySelector('.resul');

function addition(){
    let result = parseFloat(first.value,10) + parseFloat(second.value,10);
    resul.innerHTML = 'The result of the sum is: ' + result;
}

function subtraction(){
    let result = parseFloat(first.value,10) - parseFloat(second.value,10);
    resul.innerHTML = 'The result of the subtraction is: ' + result;
}

function multiply(){
    let result = parseFloat(first.value,10) * parseFloat(second.value,10);
    resul.innerHTML = 'The result of the multiplication is: ' + result;
}

function divide(){
    let result = parseFloat(first.value,10) / parseFloat(second.value,10);
    resul.innerHTML = 'The result of the division is: ' + result;
}