import './style.scss';

const fruits = [
  { name: 'Orange', price: 2.4 },
  { name: 'Strowberry', price: 8.4 },
];

const renderFruits = (fruits) => {
  let result = ``;
  fruits.forEach((fruit) => {
    result += `
      <div class="fruit">
        <h3>${fruit.name}</h3>
        <span>$ ${fruit.price}</span>
        <button>Buy</button>
      </div>
    `;
  });
  return result;
};

let fruitsLits = `
  <div class="fruit-list">
    ${renderFruits(fruits)}
  </div>
`;

document.querySelector('#app').innerHTML = `
  <h1>Fruit list with Vite</h1>
  ${fruitsLits}
`;
