import { useState } from "react";
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import { inc, dec, removeFromCart } from "../store/actions/product";

function CartItem({ item }) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const increment = (id) => {
    setCount(count + 1);
    dispatch(inc(id));
  };

  const decrement = (id) => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(dec(id));
    } else {
      dispatch(removeFromCart(id));
    }
  };
  return (
    <div className="border p-1 shadow d-flex justify-content-between align-items-center">
      <div>{item.name}</div>
      <div>
        <Counter inc={() => increment(item.id)} />
      </div>
      <div>{count}</div>
      <Counter dec={() => decrement(item.id)} />
      <div>{item.harga}</div>
    </div>
  );
}

export default CartItem;
