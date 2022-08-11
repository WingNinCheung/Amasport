import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../store/product";
import { NavLink } from "react-router-dom";
import primeIcon from "../../images/amazon-prime-delivery-checkmark._CB659998231_.png";

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => Object.values(state.product));

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return <div>DAMN</div>;
}

export default Home;
