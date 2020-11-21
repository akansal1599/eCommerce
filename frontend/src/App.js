import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector,useDispatch } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderConfirmationScreen from "./screens/OrderConfirmationScreen";
import {logout} from "./actions/userActions";

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <Link to="/">Shop<i className="fas fa-star"></i>
            </Link>
          </div>
          <div className="header-links">
            <a href="cart.html">
              <i className="fas fa-shopping-cart fa-2x"></i>
            </a>
            {userInfo ? (<button
                type="button" onClick={handleLogout} className="logout"><i
                    className="fas fa-sign-out-alt fa-2x"></i>
                </button>)
                :
                (<Link to="/signin"><i className="fas fa-sign-in-alt fa-2x"></i>
                </Link>
            )}
          </div>
        </header>
        <main className="main">
          <div>
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/confirm" component={OrderConfirmationScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
