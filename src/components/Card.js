import Button from "./Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addCart } from "../store/actions/product";

function CustomCard({ food }) {
  const dispatch = useDispatch();
  const addToCart = (id) => {
    dispatch(addCart(id));
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={food.image} />
      <Card.Body>
        <Card.Title>{food.name}</Card.Title>
        <Card.Text>{food.description}</Card.Text>
        <Button
          variant="primary"
          value={food.harga}
          action={() => addToCart(food.id)}
        />
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
