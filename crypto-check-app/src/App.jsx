import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Provider from './context/Provider';
import AllCryptos from './Pages/AllCryptos';

function App() {
  return (
    <Provider>
      <Routes>
        <Route exact path="/" element={<AllCryptos />} />
      </Routes>
    </Provider>
  );
}

export default App;
