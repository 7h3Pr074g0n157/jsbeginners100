(function () {
  let i = 0;
  function updateForward() {
    i >= 4 ? (i = 0) : i++;
    document.getElementById('image').src = `images/contBcg-${i}.jpg`;
    console.log(i);
  }

  function updateBackward() {
    i <= 0 ? (i = 4) : i--;
    document.getElementById('image').src = `images/contBcg-${i}.jpg`;
    console.log(i);
  }

  document.getElementById('backward').addEventListener('click', updateBackward);
  document.getElementById('forward').addEventListener('click', updateForward);
})();
