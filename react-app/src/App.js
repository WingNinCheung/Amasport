import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Account from "./components/Account";
import Profile from "./components/profile";
import User from "./components/User";
import { authenticate } from "./store/session";
import Splash from "./components/Splash";
import Home from "./components/home";
import ProductDetails from "./components/productDetail";
import CreateReview from "./components/review/createReview";
import EditReview from "./components/review/editReview";
import Cart from "./components/cart/cart";
import Checkout from "./components/checkout/checkout";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

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
      <Switch>
        <Route path="/" exact={true}>
          <Splash />
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
        {/* <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute> */}
        <ProtectedRoute path="/home" exact={true}>
          <Home />
        </ProtectedRoute>
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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
