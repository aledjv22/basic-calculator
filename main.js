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
//div first number
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
//div second number
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

//div operations
const operations = document.createElement('div');
operations.classList.add('operations');
main.appendChild(operations);
//div addition
const div_addition = document.createElement('div');
div_addition.classList.add('addition');
operations.appendChild(div_addition);
const button_addition = document.createElement('button');
button_addition.setAttribute('id','addition');
button_addition.setAttribute('onclick','addition()');
button_addition.innerText = 'Addition';
div_addition.appendChild(button_addition);
//div subtraction
const div_subtraction = document.createElement('div');
div_addition.classList.add('subtraction');
operations.appendChild(div_subtraction);
const button_subtraction = document.createElement('button');
button_subtraction.setAttribute('id','subtraction');
button_subtraction.setAttribute('onclick','subtraction()');
button_subtraction.innerText = 'Subtraction';
div_subtraction.appendChild(button_subtraction);
//div multiply
const div_multiply = document.createElement('div');
div_multiply.classList.add('multiply');
operations.appendChild(div_multiply);
const button_multiply = document.createElement('button');
button_multiply.setAttribute('id','multiply');
button_multiply.setAttribute('onclick','multiply()');
button_multiply.innerText = 'Multiply';
div_multiply.appendChild(button_multiply);
//div divide
const div_divide = document.createElement('div');
div_divide.classList.add('divide');
operations.appendChild(div_divide);
const button_divide = document.createElement('button');
button_divide.setAttribute('id','divide');
button_divide.setAttribute('onclick','divide()');
button_divide.innerText = 'divide';
div_divide.appendChild(button_divide);

//Resultado
const pResul = document.createElement('p');
pResul.classList.add('resul');
main.appendChild(pResul);

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

//footer
const footer = document.createElement('footer');
body.appendChild(footer);
const pFooter = document.createElement('p');
pFooter.classList.add('pie');
pFooter.innerText = 'I hope you enjoy it.';
body.appendChild(pFooter);