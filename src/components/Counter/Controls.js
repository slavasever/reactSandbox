//
// ***Модуль 2 - События и состояние***
//

import PropTypes from 'prop-types';
import s from './Counter.module.css';

function Controls({ onIncrement, onDecrement }) {
  return (
    <div className="s.counterControls">
      <button type="button" className={s.button} onClick={onIncrement}>
        Збільшити на 1
      </button>
      <button type="button" className={s.button} onClick={onDecrement}>
        Зменшити на 1
      </button>
    </div>
  );
}

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default Controls;
