// import Rendering from './components/Rendering';
// import dataArr from './data.json';
// import Counter from './components/Counter/counter';
// import Dropdown from './components/Dropdown/Dropdown';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import colorPickeroptions from './data/colorPicker.json';
import TodoApp from './components/TodoApp/TodoApp';

//
// ***Модуль 1 - Занятие 1 - Знакомство с React***
//

// function App() {
//   return (
//     <ul>
//       {dataArr.map(data => (
//         <li key={data.id}>
//           <Rendering
//             url={data.url}
//             title={data.title}
//             author={data.author.tag}
//             authorUrl={data.author.url}
//             price={data.price}
//             quantity={data.quantity}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }

//
// ***Модуль 2 - События и состояние***
//

function App() {
  return (
    <>
      {/* <Dropdown /> */}
      {/* <Counter initialValue={0} /> */}
      {/* <ColorPicker options={colorPickeroptions} /> */}
      <TodoApp />
    </>
  );
}

export default App;
