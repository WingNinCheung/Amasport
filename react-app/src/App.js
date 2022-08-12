import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Account from "./components/Account";
import Profile from "./components/profile";
import { authenticate } from "./store/session";
import Splash from "./components/Splash";
import Home from "./components/home";
import ProductDetails from "./components/productDetail";
import CreateReview from "./components/review/createReview";
import EditReview from "./components/review/editReview";
import Cart from "./components/cart/cart";
import Checkout from "./components/checkout/checkout";
import Order from "./components/order/order";
import ThankYou from "./components/checkout/thankyou";
import OrderDetails from "./components/order/orderDetail";
import SearchProductDetail from "./components/home/searchProductDetail";
import CategoryNavBar from "./components/home/categoryNavBar";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <ProtectedRoute>
        <CategoryNavBar />
      </ProtectedRoute>
      <Switch>
        <Route path="/" exact={true}>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home" exact={true}>
          <Home />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <Account />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <Profile />
        </ProtectedRoute>
        {/* <ProtectedRoute path="/home" exact={true}>
          <Home />
        </ProtectedRoute> */}
        <ProtectedRoute path="/products/:id" exact={true}>
          <ProductDetails />
        </ProtectedRoute>
        <ProtectedRoute path="/products/:id/reviews/new" exact={true}>
          <CreateReview />
        </ProtectedRoute>
        <ProtectedRoute
          path="/products/:productId/reviews/:id/edit"
          exact={true}
        >
          <EditReview />
        </ProtectedRoute>
        <ProtectedRoute path="/cart" exact={true}>
          <Cart />
        </ProtectedRoute>
        <ProtectedRoute path="/cart/checkout" exact={true}>
          <Checkout />
        </ProtectedRoute>
        <ProtectedRoute path="/order-history" exact={true}>
          <Order />
        </ProtectedRoute>
        <ProtectedRoute path="/thank-you" exact={true}>
          <ThankYou />
        </ProtectedRoute>
        <ProtectedRoute path="/order/:id" exact={true}>
          <OrderDetails />
        </ProtectedRoute>
        <ProtectedRoute path="/search/:category/:text" exact={true}>
          <SearchProductDetail />
        </ProtectedRoute>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
