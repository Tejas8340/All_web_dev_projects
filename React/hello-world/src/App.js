import logo from './logo.svg';
import './App.css';
import React,{useRef, useState} from 'react';

 function App () {
  return(
    <div className='App'>
       <h1>hello world</h1>
       <HOCRed cmp={Counter}/>
       <HOCGreen cmp={Counter}/>
    </div>
    );

 }
 function HOCRed(props)
 {
  return<h2 style={{backgroundColor:'red', width: 1000}}><props.cmp  /></h2>
 }
 function HOCGreen(props)
 {
  return<h2 style={{backgroundColor:'green', width: 1000}}><props.cmp  /></h2>
 }
 function Counter()
 {
  const [count, setCount]=useState(0)
  return <div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
 }

export default App;
