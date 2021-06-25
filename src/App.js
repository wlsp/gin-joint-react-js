import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navigation from './components/Navigation';
import Home from "./components/Home";
import Entertainment from './components/Entertainment';
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Shop from "./Pages/Shop";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/entertainment" component={Entertainment} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
