
const display = document.getElementById('display');

function append(value) {
  if (display.innerText === '0' && value !== '.') display.innerText = '';
  display.innerText += value;
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = '0';
  }
}

function calculate() {
  try {
    let expression = display.innerText.replace(/÷/g, '/').replace(/×/g, '*');
    let result = eval(expression);
    display.innerText = Number.isInteger(result) ? result : parseFloat(result.toFixed(8));
  } catch {
    display.innerText = 'Error';
  }
}

document.addEventListener('keydown', function(e) {
  const key = e.key;
  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    deleteLast();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

 