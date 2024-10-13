'use strict'

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', inputInfo);

function inputInfo(event) {
  if (event.currentTarget.value.trim() === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = event.currentTarget.value.trim();
  }
}