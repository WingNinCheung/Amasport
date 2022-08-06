import { getCart, addProduct, updateQuantity } from "../../store/cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

function AddToCart() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session);
  const cart = useSelector((state) => Object.values(state.cart));

  //product id
  const { id } = useParams();
  const userId = sessionUser.user.id;
  const [exceedLimit, setExceedLimit] = useState(false);

  const myProduct = cart.find((product) => product.product_id == id);
  console.log(myProduct, "cart is ", cart);
  // if no product is found, create that product in the cart table
  useEffect(() => {
    if (!myProduct) {
      console.log("should not see me");
      dispatch(addProduct(userId, id));
    } else {
      if (myProduct.quantity < 9) {
        let qty = myProduct.quantity + 1;
        dispatch(updateQuantity(userId, id, qty));
      }
    }
  }, []);

  // if found, check if the quantity is <= 9, if yes, then add to db increase +1
  // if no, then display a message, do not add to cart

  useEffect(() => {
    dispatch(getCart(userId));
  }, [dispatch]);

  return <h1>Added TO cart Page</h1>;
}

export default AddToCart;
