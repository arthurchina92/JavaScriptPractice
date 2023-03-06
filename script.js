const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const parrafitoId = document.querySelector('#parrafitoId');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');

btn.addEventListener('click', btnOnClick);

function btnOnClick(event) {
const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
pResult.innerText = "Resultado: " + sumaInputs;
}
