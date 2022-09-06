import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AllCryptos from './Pages/AllCryptos';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<AllCryptos />} />
    </Routes>
  );
}

export default App;
