const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartLs = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLs = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  // save to local storage
  saveCartLs(cart);
};

const removeFromLs = (id) => {
  const cart = getStoredCart(); // kono etka array peye gelam
  /*   
  // array theke kono ekta opadan remove korar koyekta system ache :-
  // ekta hocche oitar element take khoje ber kore oitake drill kore deoa
  // arekta hocche tore bad diye baki goloke nilam tahole kino hoi arki
 */
  const remaining = cart.filter((idx) => idx !== id);
  /* 
  // orthat prottekta id er jonno loop kortechi ebong oigole select kortechi jeta bakigoloke select kortechi
  // ete ekta oshobidha ache seta hocche kono item jodi ekadhik bar thake tahole oitao remove hoye jabe
  // tumi jodi ektakoe remove korte chao sehta korar jonno oitar index ke select korte hobe erokom onek system ei kora jabe
  // so jai hok amra sob golokei apatoto remove kore dilam
   */
  saveCartLs(remaining);
};
export { addToLs, getStoredCart, removeFromLs };
