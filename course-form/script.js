const submitBtn = document.querySelector('submit');
console.log(submitBtn);
const spinner = document.querySelector('fa-spinner');
submitBtn.addEventListener('click', (e) => {
  console.log(spinner.classList);
});
