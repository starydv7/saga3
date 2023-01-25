import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart, removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  console.log(cartData);
  const dispatch = useDispatch();
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  console.warn(amount);
  return (
    <div>
      <Link to="/" className="back">
        Back to Home Page
      </Link>
      <h1>Cart Page</h1>
      <div className="cart-page-container">
        {cartData.map((item) => (
          <div className="cart-div">
            <div className="img">
              {" "}
              <img src={item.images} alt="" className="images-div" />{" "}
            </div>
            <div>TITLE : {item.title}</div>
            <div>PRICE : {item.price}</div>
            <div>ID : {item.id} </div>
            <button onClick={() => dispatch(removeToCart(item.id))}>
              Remove to Cart
            </button>
            <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
          </div>
        ))}
      </div>
      <div className="price-details">
        <div className="adjust-price">
          <span>Amount</span>
          <span>{amount}</span>
        </div>
        <div className="adjust-price">
          <span>Discount</span>
          <span>{amount / 10}</span>
        </div>
        <div className="adjust-price">
          <span>Tax</span>
          <span>000</span>
        </div>
        <div className="adjust-price">
          <span>Total</span>
          <span>{amount - amount / 10}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
