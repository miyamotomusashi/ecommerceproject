
import "./App.css";

import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogDetailPage from "./pages/BlogDetailPage";
// import CardPage from "./pages/CardPage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import AuthPage from "./pages/AuthPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
   
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/shop" element={<ShopPage/>} />
      <Route path="/blog" element={<BlogPage/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/auth" element={<AuthPage/>} />
      <Route path="/product/:id" element={<ProductDetailsPage/>} />
      <Route path="/blog/:id" element={<BlogDetailPage/>} />
    </Routes>
  );
}

export default App;
