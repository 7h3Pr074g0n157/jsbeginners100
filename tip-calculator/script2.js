const submitBtn = document.getElementById('submit-btn');

function renderOutput(calculatedOutput) {
  const div = document.createElement('div');
  div.setAttribute('id', 'display-output');
  div.innerHTML = `
    <p>Your bill is: ${calculatedOutput.billAmount}</p>
    <p>Your tip is: ${calculatedOutput.tipAmount}</p>
    <p>Total amount of each person: ${calculatedOutput.totalPerHead}</p>
  `;
  document.getElementById('container').append(div);
}

function calculateOutput(bill, people, tip) {
  const results = {
    billAmount: bill,
    tipAmount: bill * tip,
    totalPerHead: (bill * (1 + tip)) / people,
  };

  renderOutput(results);
}

function submitHandler() {
  const billInput = document.getElementById('bill-input').value;
  const peopleInput = document.getElementById('people-input').value;
  const tipSelect = document.getElementById('tip-selection');
  const tipOption = tipSelect.options[tipSelect.selectedIndex].value;
  calculateOutput(Number(billInput), Number(peopleInput), Number(tipOption));
}
submitBtn.addEventListener('click', submitHandler);
