import { BrowserRouter as Router, Switch, Route, withRo } from "react-router-dom";
import "./App.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
// Route dependecies
import Home from "../src/pages/Home";
import Categories from "../src/pages/Categories";
import Blog from "../src/pages/Blog";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Wishlist from "../src/pages/Wishlist";
import Login from "../src/pages/Login";
import MyAccount from "./pages/MyAccount";

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
          <Route path="/categories" component={Categories} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/login" component={Login} />
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

