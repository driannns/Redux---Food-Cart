import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../store/actions/product";
import Button from "./Button";
import CartItem from "./CartItem";

function Cart({ cart }) {
  const [total, setTotal] = useState(0);
  const [jumlahBayar, setJumlahBayar] = useState(0);
  const [kembalian, setKembalian] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach((value) => {
      totalPrice += value.harga;
    });
    setTotal(totalPrice);
  }, [cart]);

  // useEffect(() => {
  //   if (jumlahBayar > total) {
  //     setKembalian(jumlahBayar - total);
  //   } else {
  //     setKembalian("gak cukup");
  //   }
  // }, [jumlahBayar, total]);

  const handleBayarChange = (e) => {
    setJumlahBayar(e.target.value);
  };

  const change = () => {
    if (total < jumlahBayar) {
      setKembalian(jumlahBayar - total);
    }
  };

  const reset = () => {
    dispatch(resetCart());
    setJumlahBayar(0);
    setTotal(0);
    setKembalian(0);
  };

  return (
    <div
      className="border-start p-4 position-fixed end-0 z-3"
      style={{ width: "20vw", height: "90vh", top: "10vh" }}
    >
      <p className="text-center">
        {cart ? `${cart.length} item in carts` : "0 items in carts"}
      </p>
      <div className="position-relative w-100 h-100">
        <div className="d-flex flex-column gap-3">
          {cart.map((value) => (
            <CartItem key={value.id} item={value} />
          ))}
        </div>
        <div className="position-absolute bottom-0">
          <div className="d-flex align-items-center justify-content-between">
            <p>Total</p>
            {total}
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Jumlah Bayar</p>
            <input
              type="number"
              value={jumlahBayar}
              min="0"
              onChange={handleBayarChange}
            />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p>Kembalian</p>
            {kembalian}
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <Button variant="danger" value="Reset" action={reset} />
            <Button variant="success" value="Selesai" action={change} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
