import { Route,  Switch } from "react-router";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import { BrowserRouter  as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
    
  );
}

export default App;
