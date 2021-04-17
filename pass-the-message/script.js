(function () {
  const submit = document.getElementById('submit');
  submit.addEventListener('click', () => {
    const input = document.getElementById('input');
    const message = input.value;
    input.value = '';

    const output = document.getElementById('output');
    output.textContent = message;
  });
})();
