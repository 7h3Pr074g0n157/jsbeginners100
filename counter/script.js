(function () {
  function calcNumber(operation, number) {
    if (operation === 'minus') {
      number -= 1;
    } else if (operation === 'plus') {
      number += 1;
    }
    return number;
  }

  function update(operation) {
    const number = document.getElementById('number');
    const newNum = calcNumber(operation, parseInt(number.textContent));
    number.textContent = newNum;
    newNum > 0
      ? (number.style.color = 'green')
      : newNum < 0
      ? (number.style.color = 'red')
      : (number.style.color = 'grey');
  }

  document
    .getElementById('minus')
    .addEventListener('click', (e) => update(e.target.id));
  document
    .getElementById('plus')
    .addEventListener('click', (e) => update(e.target.id));
})();
