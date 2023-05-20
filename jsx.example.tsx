import React, {createElement as e, useState} from 'react';
import logo from './logo.svg';

function App() {
    const [count, setCount] = useState(0)
    // return (
    //   <h1>Hello World</h1>
    // );
    return e('div', {className: 'container'}, [
      e('h1', {className: 'font-bold text-red-500', key: 1}, `test ${count}`),
      e('button', {
        className: 'py-2 px-4 border', 
        key: 2,
        onClick: () => {
          setCount(count + 1)
        }
      }, 'Click me')
    ])
  }