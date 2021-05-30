(function () {
  const btnAll = document.getElementById('all');
  const btnCakes = document.getElementById('cakes');
  const btnCupcakes = document.getElementById('cupcakes');
  const btnSweets = document.getElementById('sweets');
  const btnDoughnuts = document.getElementById('doughnuts');
  const frmInput = document.getElementById('input');
  const articlesCollection =
    document.getElementsByClassName('article-container');
  const articles = [...articlesCollection];

  function toggleDisplay(display) {
    for (let article of articles) {
      article.style.display = display ? 'grid' : 'none';
    }
  }

  function displaySearch(filteredArticles) {
    toggleDisplay(false);

    for (let article of filteredArticles) {
      article.style.display = 'grid';
    }
  }

  function filterArticles(event) {
    const toFilter =
      event.target.id == 'input' ? event.target.value : event.target.id;
    const regex = new RegExp(`^${toFilter}`, 'i');

    const filteredArticles = articles.filter((article) => {
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

  for (let article of articles) {
    article.addEventListener('click', (event) => {
      const clicked = event.target.parentElement.parentElement;
      console.log(clicked);
      const clickedImg = clicked.cloneNode(true);

      const divDarkenSurrounding = document.createElement('div');
      divDarkenSurrounding.setAttribute('id', 'darken-surrounding');
      // console.dir(clicked);
      divDarkenSurrounding.appendChild(clickedImg);
      // const divContainer = document.createElement('div');
      // divContainer.setAttribute('id', 'container-jumbotron');

      // const spanClose = document.createElement('span');
      // spanClose.innerHTML =
      //   '<i id="close-img-jumbotron" class="fas fa-times"></i>';
      // divContainer.appendChild(spanClose);

      // const divImgFrame = document.createElement('div');
      // divImgFrame.setAttribute('id', 'img-frame-jumbotron');

      // const btnLeft = document.createElement('button');
      // const btnRight = document.createElement('button');
      // btnLeft.setAttribute('id', 'btn-left');
      // btnRight.setAttribute('id', 'btn-right');
      // btnLeft.innerHTML = '<i class="fas fa-chevron-left"></i>';
      // btnRight.innerHTML = '<i class="fas fa-chevron-right"></i>';
      // const figure = document.createElement('figure');
      // figure.setAttribute('id', 'img-jumbotron');
      // divImgFrame.appendChild(btnLeft);
      // divImgFrame.appendChild(clickedImg);
      // divImgFrame.appendChild(btnRight);
      // divContainer.appendChild(divImgFrame);
      // divDarkenSurrounding.appendChild(divContainer);

      document.body.appendChild(divDarkenSurrounding);

      spanClose.addEventListener('click', () => {
        document.body.removeChild(
          document.getElementById('darken-surrounding')
        );
      });
      btnRight.addEventListener('click', (event) => {
        const imgCollection = document.querySelectorAll(
          '#img-frame-jumbotron img'
        );
        const currImg = document.querySelector('#img-frame-jumbotron img');
        console.log(currImg);
        for (let img in imgCollection) {
          if (currImg.dataset.id == imgCollection[img].dataset.id) {
            console.log(imgCollection[img]);
          }
        }
      });
    });
  }
})();
