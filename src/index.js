import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//
// ***Модуль 1 - Занятие 1 - Знакомство с React***
//

const e1 = <span>Hello </span>;
// const e1 = React.createElement('span', { children: 'привет' });
const e2 = <span>world</span>;
// const e2 = React.createElement('span', { children: 'мир' });

// const elmnt = React.createElement('div', {
//   children: [e1, ' ', e2],
// });

// console.log(elmnt);

// root.render(elmnt);

// const jsxElmnt = (
//   <div>
//     {e1}
//     {e2}
//   </div>
// );

// console.log(jsxElmnt);

// root.render(jsxElmnt);

// const obj = {
//   id: 'id-1',
//   url: 'https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=320&w=240',
//   title: 'Abstract art',
//   price: 300,
//   author: {
//     tag: 'some author',
//     url: '#',
//   },
//   quantity: 10,
// };

// const card = (
//   <div>
//     <img src={obj.url} alt={obj.title} width="480" />
//     <h2>{obj.title}</h2>
//     <p>
//       Автор: <a href={obj.author.url}>{obj.author.tag}</a>
//     </p>
//     <p>Цена: {obj.price} кредитов</p>
//     <p>Доступность {obj.quantity} шт.</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// root.render(card);

// root.render(<App />);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
