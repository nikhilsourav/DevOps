let num1 = document.querySelector('input[name="number1"]');
let num2 = document.querySelector('input[name="number2"]');

const result = document.getElementById('sum');
const calcBtn = document.querySelector('#form__input-calcBtn');
const clearBtn = document.querySelector('#form__input-clearBtn');

calcBtn.addEventListener('click', () => {
  let first, second;
  if (!num1.value) {
    first = 0;
  } else {
    first = parseInt(num1.value);
  }

  if (!num2.value) {
    second = 0;
  } else {
    second = parseInt(num2.value);
  }

  result.innerHTML = parseInt(first + second);
});

clearBtn.addEventListener('click', () => {
  result.innerHTML = 0;
  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach((input) => {
    input.value = '';
  });
});
