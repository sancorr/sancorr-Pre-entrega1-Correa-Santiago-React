import Navbar from "./components/navbar/Navbar";
import Itemlistcontainer from "./components/itemListContainer/Itemlistcontainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EjemploFormulario from "./components/ejemploFormulario/EjemploFormulario";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/cart/Cart";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

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
          <Route path="/ejemplo" element={<EjemploFormulario />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
