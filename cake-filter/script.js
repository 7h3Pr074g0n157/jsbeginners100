(function () {
  const btnAll = document.getElementById('all');
  const btnCakes = document.getElementById('cakes');
  const btnCupcakes = document.getElementById('cupcakes');
  const btnSweets = document.getElementById('sweets');
  const btnDoughnuts = document.getElementById('doughnuts');
  const frmInput = document.getElementById('input');
  const articles = document.querySelectorAll('#articles figure');

  function toggleDisplay(display) {
    for (let article of articles) {
      article.style.display = display ? 'block' : 'none';
    }
  }

  function displaySearch(filteredArticles) {
    toggleDisplay(false);

    for (let article of filteredArticles) {
      article.style.display = 'block';
    }
  }

  function filterArticles(event, getType, btn) {
    const toFilter =
      event.target.id == 'input' ? event.target.value : event.target.id;
    const regex = new RegExp(`^${toFilter}`, 'i');

    const filteredArticles = [...articles].filter((article) => {
      return (
        regex.test(article.dataset.type) || regex.test(article.dataset.price)
      );
    });

    displaySearch(filteredArticles);
  }

  btnAll.addEventListener('click', toggleDisplay);
  btnCakes.addEventListener('click', (event) => filterArticles(event));
  btnCupcakes.addEventListener('click', (event) => filterArticles(event));
  btnSweets.addEventListener('click', (event) => filterArticles(event));
  btnDoughnuts.addEventListener('click', (event) => filterArticles(event));
  frmInput.addEventListener('input', (event) => filterArticles(event));
})();
