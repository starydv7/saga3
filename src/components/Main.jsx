import { addToCart, emptyCart, removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import styles from "./home.module.css";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  useEffect(() => {
    dispatch(productList());
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className={styles.productcontainer}>
        {data.map((item) => (
          <div className={styles.productitem}>
            <img src={item.thumbnailUrl} alt="" />
            <div>Name : {item.albumId}</div>
            <div>
              {" "}
              <img src={item.url} alt="" />{" "}
            </div>
            <div>Price : {item.title} </div>
            <div>Category : {item.id} </div>

            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
              <button onClick={() => dispatch(removeToCart(item.id))}>
                Remove to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
