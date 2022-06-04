//
// ***Модуль 1 - Занятие 1 - Знакомство с React***
//

// компонент

import PropTypes from 'prop-types';

function Rendering(props) {
  const { url, title, author, authorUrl, price, quantity } = props;
  return (
    <>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={author}>{authorUrl}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity > 10 ? 'есть в наличии' : 'заканчивается'}</p>
      <button type="button">Добавить в корзину</button>
    </>
  );
}

Rendering.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Rendering;
