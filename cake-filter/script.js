(function () {
  const btnAll = document.getElementById('all');
  const btnCakes = document.getElementById('cakes');
  const btnCupcakes = document.getElementById('cupcakes');
  const btnSweets = document.getElementById('sweets');
  const btnDoughnuts = document.getElementById('doughnuts');

  const cakes = [],
    cupcakes = [],
    sweets = [],
    doughnuts = [];
  const articles = document.querySelectorAll('#articles figure');

  for (let article of articles) {
    const data = {
      id: article.dataset.id,
      type: article.dataset.type,
      price: article.dataset.price,
    };

    switch (data.type) {
      case 'cake':
        cakes.push(data);
        break;
      case 'cupcake':
        cupcakes.push(data);
        break;
      case 'sweet':
        sweets.push(data);
        break;
      case 'doughnut':
        doughnuts.push(data);
        break;
    }
  }

  function displayAll() {
    for (let article of articles) {
      article.style.display = 'block';
    }
  }

  function getType(btn) {
    return btn.textContent.toLowerCase();
  }
  function selectType(getType, btn) {
    let type = getType(btn);

    displayAll();

    for (let article of articles) {
      if (article.dataset.type !== type) {
        article.style.display = 'none';
      }
    }
  }

  btnAll.addEventListener('click', displayAll);
  btnCakes.addEventListener('click', () => selectType(getType, btnCakes));
  btnCupcakes.addEventListener('click', () => selectType(getType, btnCupcakes));
  btnSweets.addEventListener('click', () => selectType(getType, btnSweets));
  btnDoughnuts.addEventListener('click', () =>
    selectType(getType, btnDoughnuts)
  );
})();
