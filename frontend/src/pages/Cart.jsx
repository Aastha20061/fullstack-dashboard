import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  increaseQty,
  decreaseQty
} from "../redux/cartSlice";

export default function Cart() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2 className="mb-4">🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {cart.map(item => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>${item.price}</td>

                <td>
                  <button
                    className="btn btn-sm btn-secondary me-2"
                    onClick={() => dispatch(decreaseQty(item._id))}
                  >
                    -
                  </button>

                  {item.quantity}

                  <button
                    className="btn btn-sm btn-secondary ms-2"
                    onClick={() => dispatch(increaseQty(item._id))}
                  >
                    +
                  </button>
                </td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeItem(item._id))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>
    </div>
  );
}