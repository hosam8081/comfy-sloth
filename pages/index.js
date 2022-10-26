import { LandingPage, FeaturedProduct, Services, Contact } from "../components";
import { getFetchProducts } from "../slice/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { totalAmount } from "../slice/cartSlice";
export default function Home() {
  const {cart} = useSelector(state => state.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchProducts());
  }, []);
  return (
    <div className="">
      <LandingPage />
      <FeaturedProduct />
      <Services />
      <Contact />      
    </div>
  );
}
