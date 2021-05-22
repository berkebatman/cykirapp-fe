import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
//
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
// Route dependecies
import Home from "../src/pages/Home";
import Rent from "../src/pages/Rent";

function App() {
  return (
  <>
    <Header />



    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/rent">
            <Rent />
          </Route>
        </Switch>
      </div>
    </Router>



    <Footer />
  </>
  );
}

export default App;
