import React from 'react';
import ReactDOM from 'react-dom';

const name = ['Sheetal' ,'Saraswat' ,'Sharma'];
const detail =[1, ...name,'Noida'];

console.log(name);
console.log(detail);

ReactDOM.render(
  <>
  <h1>Spread Operator(...)</h1>
  <h3>{name.toString()} and its details is {detail.toString()}</h3>
  {/* here toString() is use to provide comma in output  */}
  </>,
  document.getElementById('root')
)
