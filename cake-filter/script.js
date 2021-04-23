(function () {
  const btnAll = document.getElementById('all');
  const btnCakes = document.getElementById('cakes');
  const btnCupcakes = document.getElementById('cupcakes');
  const btnSweets = document.getElementById('sweets');
  const btnDoughnuts = document.getElementById('doughnuts');
  const articles = document.querySelectorAll('#articles figure');

  const cakes = [],
    cupcakes = [],
    sweets = [],
    doughnuts = [];

  function getType(btn) {
    return btn.textContent.toLowerCase();
  }

  function splitUpArticles() {
    for (let article of articles) {
      const data = {
        id: article.dataset.id,
        type: article.dataset.type,
        price: article.dataset.price,
      };

      switch (data.type) {
        case getType(btnCakes):
          cakes.push(data);
          break;
        case getType(btnCupcakes):
          cupcakes.push(data);
          break;
        case getType(btnSweets):
          sweets.push(data);
          break;
        case getType(btnDoughnuts):
          doughnuts.push(data);
          break;
      }
    }
  }
  function displayAll() {
    for (let article of articles) {
      article.style.display = 'block';
    }
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

  splitUpArticles();

  btnAll.addEventListener('click', displayAll);
  btnCakes.addEventListener('click', () => selectType(getType, btnCakes));
  btnCupcakes.addEventListener('click', () => selectType(getType, btnCupcakes));
  btnSweets.addEventListener('click', () => selectType(getType, btnSweets));
  btnDoughnuts.addEventListener('click', () =>
    selectType(getType, btnDoughnuts)
  );
})();
