(function () {
  const keys = document.getElementsByClassName('keys');
  const screen = document.getElementById('screen');
  let operator = '',
    currentInput = '',
    num = null,
    solution = 0;

  function displayInput(input) {
    screen.value = input;
  }

  function clearInput(isC) {
    if (isC) {
      solution = 0;
      screen.value = '0';
    }
    operator = '';
    currentInput = '';
    num1 = 0;
    num2 = 0;
  }

  function returnOperation(operator) {
    let operation;
    switch (operator) {
      case '+':
        operation = function add(num1, num2) {
          return num1 + num2;
        };
        break;
      case '-':
        operation = function minus(num1, num2) {
          return num1 - num2;
        };
        break;
      case '*':
        operation = function times(num1, num2) {
          return num1 * num2;
        };
        break;
      case '/':
        operation = function divided(num1, num2) {
          return num1 / num2;
        };
        break;
    }
    return operation;
    // displayInput(solution);
    // clearInput();
  }

  function handler() {
    currentInput = this.textContent.trim();
    let operation;
    if (isNaN(currentInput) && currentInput !== 'C' && currentInput !== '=') {  
      operation = returnOperation(currentInput);
    } 
    
    num = num === 0 ? Number(currentInput) : solution;
    

    solution = operation(num, Number(currentInput))
    console.log(solution)
  }

  for (let key of keys) {
    key.addEventListener('click', handler);
  }
})();

// Video zu bind() 140 + 141 in JavaScript - The Complete Guide 2021
