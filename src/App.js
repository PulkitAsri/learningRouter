import { Route,  Switch } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import { BrowserRouter  as Router} from "react-router-dom";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/shop"  exact component={Shop}/>
          <Route path="/about" component={About}/>
          <Route path="/shop/:id" component={ProductPage} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
