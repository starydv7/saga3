import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    console.log(cartData);
    let amount = cartData.length && cartData.map(item=>item.price).reduce((prev, next)=>prev+next)
console.warn(amount)
    return (
     <div>
      <Link to="/" >Go to Products Link</Link>
        <h1>Cart Page</h1>
      <div className="cart-page-container">
        {cartData.map((item) => (
          <div>
            <div>TITLE : {item.title}</div>
            <div>PRICE : {item.price}</div>
            <div>
              {" "}
              <img src={item.image} alt="" />{" "}
            </div>
            <div>Price : {item.description} </div>
            <div>Category : {item.id} </div>

          
            </div>
            
        ))}
            </div>
              <div className="price-details">
                <div className="adjust-price"><span>Amount</span><span>{amount}</span></div>
                <div className="adjust-price"><span>Discount</span><span>{amount/10}</span></div>
                <div className="adjust-price"><span>Tax</span><span>000</span></div>
                <div className="adjust-price"><span>Total</span><span>{amount-(amount/10)}</span></div>

            </div>
    </div>
    )
}

export default Cart;