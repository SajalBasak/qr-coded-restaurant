import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './components/Restaurant/Restaurant';
import Deals from './components/Deals/Deals';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Restaurant />
      <Deals />
      <Menu />
    </div>
  );
}

export default App;
