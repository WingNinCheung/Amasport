import { getCart, addProduct, updateQuantity } from "../../store/cart";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink } from "react-router-dom";
import { getProducts } from "../../store/product";
import "./addCart.css";

function AddToCart({ showModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session);
  const allProducts = useSelector((state) => Object.values(state.product));
  const cart = useSelector((state) => Object.values(state.cart));

  //product id
  const { id } = useParams();
  const userId = sessionUser.user.id;

  const [exceedLimit, setExceedLimit] = useState(false);
  let totalPrice = 0;
  let totalQuantity = 0;

  cart.forEach((item) => {
    totalPrice += item.products.price * item.quantity;
    totalQuantity += item.quantity;
  });
  totalPrice = totalPrice.toFixed(2);

  const myProduct = cart.find((product) => product.product_id == id);
  const currentProduct = allProducts.find((product) => product.id == id);

  // if no product is found, create that product in the cart table
  useEffect(async () => {
    if (!myProduct) {
      await dispatch(addProduct(userId, id));
      await dispatch(getCart(userId));
    } else {
      if (myProduct.quantity < 9) {
        myProduct.quantity = myProduct.quantity + 1;

        await dispatch(updateQuantity(userId, id, myProduct.quantity));
        await dispatch(getCart(userId));
      } else {
        setExceedLimit(true);
      }
    }
  }, [dispatch]);

  // if found, check if the quantity is <= 9, if yes, then add to db increase +1
  // if no, then display a message, do not add to cart

  useEffect(() => {
    dispatch(getCart(userId));
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      {!exceedLimit ? (
        <div className="check-container">
          <span className="upp-container">
            <span>
              <i class="fa-solid fa-check"></i>

              <span className="addedTo">Added to Cart</span>
            </span>

            <div>
              <img
                className="addedCartimg"
                src={currentProduct.image}
                alt="product"
              ></img>
            </div>
          </span>
          <div className="subtotal">
            Subtotal ({totalQuantity} items): $ {totalPrice}
          </div>

          <NavLink className="add-links" to="/cart">
            <div className="addCart-button" id="goCart">
              Go to Cart
            </div>
          </NavLink>
        </div>
      ) : (
        <div>
          <span>
            <i class="fa-solid fa-xmark"></i>
          </span>
          <span>
            <h3>Not Added to Cart</h3>
          </span>
          <div>
            <img
              src="https://media.istockphoto.com/vectors/sad-dog-cartoon-illustration-vector-id494059175?k=20&m=494059175&s=612x612&w=0&h=DZSc3Tow29THc9nfSe_sEQWV6Cd5BbFlXoTOG2Z4OVE="
              alt="product"
            ></img>
          </div>
          <div>Your cart has 9 {currentProduct.name} already!</div>
          <div>Please check out first before you purchase more</div>
          <div>
            <NavLink to="/cart">Go to Cart</NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
