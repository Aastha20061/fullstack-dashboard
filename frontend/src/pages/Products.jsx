import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const fetchProducts = () => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ➕ Add product
 const addProduct = () => {
  console.log("Button clicked"); // ✅ check click

  axios.post("http://localhost:5000/api/products", {
    name,
    price: Number(price)
  })
  .then(res => {
    console.log("Product added:", res.data); // ✅ success log
    setName("");
    setPrice("");
    fetchProducts();
  })
  .catch(err => {
    console.error("Error:", err); // ❌ error log
  });
};

  return (
    <div>
      <h2>📦 Products</h2>

      {/* ➕ FORM */}
      <div className="mb-4">
        <input
          className="form-control mb-2"
          placeholder="Product name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <button className="btn btn-success" onClick={addProduct}>
          Add Product
        </button>
      </div>

      {/* 📦 PRODUCTS */}
      {products.map(p => (
        <div key={p._id} className="border p-3 mb-2">
          <h5>{p.name}</h5>
          <p>💲 {p.price}</p>

          <button
            className="btn btn-primary"
            onClick={() => dispatch(addItem(p))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}