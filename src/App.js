import React from 'react';
import './App.css';
import Hellow from './hellow'

function App({name, age}) {
  return <div>Hellow world from App.js {name} Age = {age - 10}
      <div>
        Another tree div inside div
        </div>
        <br/>
      <Hellow firstName={name}></Hellow>
    </div>
  
  }

export default App;
// let {name, age} = user;
