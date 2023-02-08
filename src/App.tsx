import React from 'react';
import Header from './components/header/Header';
import './app.scss';
import RestList from './components/restCardList/RestList';
import Leaf from './map/Leaf';;

function App() {
  return (
    <div className="app-container">
      <Header />

      <RestList />

      <Leaf />
    </div>
  );
}

export default App;
