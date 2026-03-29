import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ height: "100vh", width: "220px" }}>
      <h4 className="mb-4">Dashboard</h4>

      <ul className="list-unstyled">
        <li className="mb-2">
          <Link to="/" className="text-white text-decoration-none">📦 Products</Link>
        </li>

        <li className="mb-2">
          <Link to="/cart" className="text-white text-decoration-none">🛒 Cart</Link>
        </li>

        <li>
          <Link to="/chat" className="text-white text-decoration-none">💬 Chat</Link>
        </li>
      </ul>
    </div>
  );
}