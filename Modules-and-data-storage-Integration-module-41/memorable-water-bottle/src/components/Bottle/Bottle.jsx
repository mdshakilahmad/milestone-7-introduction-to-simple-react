import PropsTypes from "prop-types";
import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  // console.log(bottle);
  const { name, img, price } = bottle;
  return (
    <div className="bottle">
      <h3>name: {name}</h3>
      <img src={img} alt="" />
      <p>Price: {price}</p>
      <button onClick={() => handleAddToCart(bottle)}>Purchaes</button>
    </div>
  );
};

Bottle.propTypes = {
  bottle: PropsTypes.object.isRequired,
  handleAddToCart: PropsTypes.func.isRequired,
};
export default Bottle;
