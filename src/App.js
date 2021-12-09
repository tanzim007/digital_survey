import React from 'react';
import Header from './components/Header';
import "./App.css"
import Template from './components/Template';
import Mainbody from './components/Mainbody';

function App() {
  return (
    <div className = "app">
      <Header/>
      <Template/>
      <Mainbody/>
    </div>
  );
}

export default App;
