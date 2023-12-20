import {Button} from 'antd'
import JSONEditor from 'jsoneditor';
import JsonEditor from './component/JsonEditor';
import './Test.css'

function MyButton() {
  return <Button>this is custom btn</Button>
}

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  
  <li key={product.id}>
      {product.title}
  </li>
) ;

// const listItems = products.map(product =>
//   <li key={product.id}>
//     {product.title}
//   </li>
// );
const loading = true;

// var json = {
//   "Array": [1, 2, 3, 4,6],
//   "Boolean": true,
//   "Null": null,
//   "Number": 123,
//   "Object": {"a": "b", "c": "d"},
//   "String": "Hello World"
// };
var json = {};


console.log('item', listItems);

export default function Test() {
  return <div className='index'>
    {/* <div className='tools'>tools</div> */}
      <JsonEditor value={json}></JsonEditor> 
  </div>
  // return <JsonEditor value={json}></JsonEditor>
}