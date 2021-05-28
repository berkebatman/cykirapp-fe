import { BrowserRouter as Router, Switch, Route, withRo } from "react-router-dom";
import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
// Route dependecies
import Home from "../src/pages/Home";
import Products from "../src/pages/Products";
import Blog from "../src/pages/Blog";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Wishlist from "../src/pages/Wishlist";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import MyAccount from "../src/pages/MyAccount";
import ProductPage from "../src/pages/ProductPage";

export default function App() {
  return (
    <>
    <Router>
      <div>
        <Header />
      </div>
        <div className="App">
          <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/myaccount" component={MyAccount} />
          </Switch>
        </div>
      <div>
       <Footer />
      </div>
      </Router>
    </>
  );
}

