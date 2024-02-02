import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { useSelector } from "react-redux";
import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Cart from "../components/Cart";
import "../assets/style/home.css";

const Home = () => {
  const [filter, setFilter] = useState(null);

  const food = useSelector((state) => state.lists.food);
  const carts = useSelector((state) => state.lists.cart);

  const filteredFood = filter
    ? food.filter((value) => value.type === filter)
    : food;

  return (
    <React.Fragment>
      <MainLayout>
        <div>
          <p>Filter: {filter} </p>
          <div className="d-flex gap-2">
            <Button action={() => setFilter("makanan")} value="Makanan" />
            <Button action={() => setFilter("minuman")} value="Minuman" />
            <Button action={() => setFilter("cemilan")} value="Cemilan" />
            <Button action={() => setFilter(null)} value="All" />
          </div>
        </div>
        <div className="grid">
          {filteredFood.map((value) => (
            <Card key={value.id} food={value} />
          ))}
        </div>
      </MainLayout>
      <div>
        <Cart cart={carts} />
      </div>
    </React.Fragment>
  );
};

export default Home;
