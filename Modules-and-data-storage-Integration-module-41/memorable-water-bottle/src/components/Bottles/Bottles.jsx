import React, { useEffect, useState } from "react";
import { removeFromLs } from "../../utilites/localstorage";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLs, getStoredCart } from "../../utilites/localstorage";
import Cart from "../Cart/Cart";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load cart from local storage
  useEffect(() => {
    console.log("called the useEffect", bottles.length);
    /* 
    const storedCart = getStoredCart();
    console.log(storedCart);
     */

    // if (bottles.length > 0) { // evabe 0 diyeo likhte pari abar sodho length dileo hobe duita eki
    if (bottles.length) {
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);

      // object er moddhe for in jabe
      // ar array er moddhe for of hobe
      const savedCart = [];
      for (const id of storedCart) {
        console.log(id);
        // find hocche ektai dibe match kore khoje na thakle null dibe. ar filter hocche onekguli dei
        const bottle = bottles.find((bottle) => bottle.id === id); // bottle er id ebong local storage er id jodi duita match kore thaole dibe arki
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      console.log("saved cart", savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    // console.log("bottle going to be added");
    // console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLs(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    // visual cart remove
    const remainingCart = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingCart);

    // remove from store LS
    removeFromLs(id);
  };
  return (
    <div>
      <h2>Bottles Available: {bottles.length}</h2>

      {/* <h4>cart: {cart.length}</h4> */}
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
