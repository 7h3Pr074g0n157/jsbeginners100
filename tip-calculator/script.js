class Component {
  constructor() {}

  createComponent(tag, hook, clsName = '', attributes) {
    const element = document.createElement(tag);

    if (clsName !== '') element.className = clsName;

    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        element.setAttribute(attr.name, attr.value);
      }
    }

    document.querySelector(hook).append(element);
    return element;
  }
}

class RenderContainer extends Component {
  constructor() {
    super();
    this.render();
  }

  render() {
    const h1 = this.createComponent('h1', '#app', 'main-heading');
    h1.textContent = 'Tip Calculator';
    this.createComponent('form', '#app', '', [{ name: 'id', value: 'form' }]);

    const labelAmount = this.createComponent('label', '#form', 'label-amount', [
      { name: 'for', value: 'input-amount' },
      { name: 'id', value: 'label-amount' },
    ]);
    labelAmount.textContent = 'How much was your bill?';
    this.createComponent('input', '#label-amount', 'label-amount', [
      { name: 'id', value: 'input-amount' },
    ]);

    const labelPeople = this.createComponent('label', '#form', 'label-people', [
      { name: 'for', value: 'input-people' },
      { name: 'id', value: 'label-people' },
    ]);
    labelPeople.textContent = 'How many people sharing the bill?';
    this.createComponent('input', '#label-people', 'label-people', [
      { name: 'id', value: 'input-people' },
    ]);

    const labelTip = this.createComponent('label', '#form', 'label-tip', [
      { name: 'for', value: 'label-tip' },
      { name: 'id', value: 'label-tip' },
    ]);
    labelTip.textContent = 'How was your service?';
    this.createComponent('select', '#label-tip', 'label-tip', [
      { name: 'id', value: 'select-tip' },
    ]);
    const options = `
    <option>Choose...</option>
    <option value="0.2">greate - 20 %</option>
    <option value="0.1">good - 10 %</option>
    <option value="0.02">bad - 2 %</option>   
    `;
    labelTip.firstElementChild.innerHTML = labelTip.innerHTML + options;
  }
}

class RenderOutput {
  constructor(amount, tip, total) {
    this.amount = amount;
    this.tip = tip;
    this.total = total;
  }
  render() {
    console.log('Hello from RenderOutput');
    alert(
      `Bill amount is ${this.amount}. Your Tip is ${this.tip}. And your total is  ${this.total}`
    );
  }
}

class Calculation extends Component {
  constructor() {
    super();
    this.renderSubmit();
    this.amount;
    this.people;
    this.tip;
    this.submitBtn = document.getElementById('submit-btn');
  }

  calculate() {
    console.log('calculate');

    const tipAmount = this.amount * this.tip;
    const total = this.amount + tipAmount;
    const totalPerPerson = total / this.people;
    const out = new RenderOutput(this.amount, tipAmount, totalPerPerson);
    out.render();
  }

  getInput() {
    this.amount = document.getElementById('input-amount').value;
    this.people = document.getElementById('input-people').value;
    const selections = document.getElementById('select-tip');
    // const selectedArea = selections.options[selections.selectedArea].value;
    // this.tip = selectedArea;
    console.log('getInput');

    this.calculate();
  }

  renderSubmit() {
    const submitBtn = this.createComponent('div', '#form', 'btn', [
      { name: 'type', value: 'submit' },
      { name: 'id', value: 'submit-btn' },
    ]);
    submitBtn.textContent = 'Calculate';
    submitBtn.addEventListener('click', this.getInput);
  }
}

class Container {
  constructor() {
    this.render();
  }

  render() {
    new RenderContainer();
    new Calculation();
  }
}

new Container();
