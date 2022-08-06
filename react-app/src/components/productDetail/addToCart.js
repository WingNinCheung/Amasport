import { getCart, addProduct, updateQuantity } from "../../store/cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

function AddToCart({ showModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session);
  const cart = useSelector((state) => Object.values(state.cart));

  //product id
  const { id } = useParams();
  const userId = sessionUser.user.id;

  let exceedLimit = false;

  const myProduct = cart.find((product) => product.product_id == id);
  console.log("the socks ", myProduct);
  // if no product is found, create that product in the cart table
  useEffect(async () => {
    if (!myProduct) {
      console.log("should not see me");
      await dispatch(addProduct(userId, id));
      await dispatch(getCart(userId));
    } else {
      if (myProduct.quantity < 9) {
        myProduct.quantity = myProduct.quantity + 1;
        console.log("smaller 9 yes", myProduct.quantity);
        await dispatch(updateQuantity(userId, id, myProduct.quantity));
        await dispatch(getCart(userId));
      } else {
        console.log("no");
        exceedLimit = true;
      }
    }
  }, [dispatch]);

  // if found, check if the quantity is <= 9, if yes, then add to db increase +1
  // if no, then display a message, do not add to cart

  useEffect(() => {
    dispatch(getCart(userId));
  }, [dispatch]);

  return <h1>Added TO cart Page</h1>;
}

export default AddToCart;
