import Button from "react-bootstrap/Button";

function CustomButton({ value, variant, action }) {
  return (
    <Button variant={variant} onClick={action}>
      {value}
    </Button>
  );
}

export default CustomButton;
