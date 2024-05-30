import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ShopProduct from "./components/ShopProduct";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopProduct />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        <Route path="/search/:title" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
