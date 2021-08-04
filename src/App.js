import React from 'react';
import Header from './components/Layout/Header/Header'
import Meals from './components/Meals/Meals'
import CartContextProvider from './store/CartContextProvider';

function App() {

  return (
    <CartContextProvider >
      <Header />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
