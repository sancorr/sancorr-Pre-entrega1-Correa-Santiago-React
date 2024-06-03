import Navbar from "./components/navbar/Navbar";
import Itemlistcontainer from "./components/itemListContainer/Itemlistcontainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import CheckOut from "./components/checkOut/CheckOut";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <ToastContainer/>

        <Routes>
          <Route
            path="/"
            element={
              <Itemlistcontainer />
            }
          />
          <Route
            path="/category/:idCategory"
            element={
              <Itemlistcontainer />
            }
          />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/cart" element= { <Cart />}/>
          <Route path="/checkout" element={<CheckOut/>}/>
        </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
