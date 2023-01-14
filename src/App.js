import './App.css';
import { addToCart } from "./redux/action";
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const products = {
    name: "I Phone",
    type: "Mobile",
    price: 1000,
    color:"red"
  }
  return (
    <div className="App">
    <button onClick={()=>dispatch(addToCart())}>Add To Cart</button>
    </div>
  );
}

export default App;
