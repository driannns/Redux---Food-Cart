import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="border-end p-4 position-fixed"
      style={{ width: "10vw", height: "90vh" }}
    >
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/product">Produk</Link>
      </div>
    </div>
  );
}

export default Sidebar;
