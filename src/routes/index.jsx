import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../pages/layout/Layout";
import NotFound from "../pages/not-found/NotFound";
import Wishes from "../pages/wishes/Wishes";
import Cart from "../pages/cart/Cart";
import CheckOut from "../pages/checkout/CheckOut";
import Discovery from "../pages/discovery/Discovery";
import About from "../pages/About/About";
import ContactUs from "../pages/contactus/ContactUs";
import Login from "../pages/login/Login";
import Detail from "../pages/detail/Detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/product/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
};

export default Router;
