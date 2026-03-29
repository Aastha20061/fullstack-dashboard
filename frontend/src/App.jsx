import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Chat from "./pages/Chat";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <Sidebar />

        <div className="p-4 w-100">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;