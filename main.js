import './style.scss';

const fruits = [
  { name: 'Orange', price: 2.4 },
  { name: 'Strowberry', price: 8.4 },
];

let appHtml = `
  <h1>Fruits</h1>
`;

fruits.forEach((fruit) => {
  appHtml += `
    <div class="fruit">
      <h3>${fruit.name}</h3>
      <span>$ ${fruit.price}</span>
      <button>Buy</button>
    </div>
  `;
});

document.querySelector('#app').innerHTML = appHtml;
