import { useSelector } from "react-redux";
import styles from "./home.module.css";
const Header = () => {
  const result = useSelector((state) => state.cartData);
  console.warn("data in header", result);
  return (
    <div className={styles.header}>
          <div className={styles.cart }>
        <span>{result.length}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
