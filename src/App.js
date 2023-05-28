import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Meals from './components/Meals/Meals'
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }
  const hideCartHandler = () => {
    setCartIsShown(false)
  }
  return (
    <Fragment>
      <Header showCart={showCartHandler} />
      {cartIsShown && <Cart hideCart={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
