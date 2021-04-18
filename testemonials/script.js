(function () {
  const testemonials = [
    {
      name: 'Sandy',
      image: 'customer-1.jpg',
      quote:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      name: 'Amy',
      image: 'customer-2.jpg',
      quote:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      name: 'Tyrell',
      image: 'customer-3.jpg',
      quote:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    {
      name: 'Wanda',
      image: 'customer-4.jpg',
      quote:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      name: 'John',
      image: 'customer-0.jpg',
      quote:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?',
    },
  ];
  let i = 0;
  const image = document.getElementsByTagName('img')[0];
  const name = document.getElementsByTagName('h2')[0];
  const q = document.getElementsByTagName('q')[0];

  function backward() {
    i <= 0 ? (i = testemonials.length - 1) : i--;

    image.src = `images/${testemonials[i].image}`;
    name.textContent = testemonials[i].name;
    q.textContent = testemonials[i].quote;
  }

  function forward() {
    image.src = `images/${testemonials[i].image}`;
    name.textContent = testemonials[i].name;
    q.textContent = testemonials[i].quote;

    i >= testemonials.length - 1 ? (i = 0) : i++;
  }

  document.getElementById('backward').addEventListener('click', backward);
  document.getElementById('forward').addEventListener('click', forward);
})();
