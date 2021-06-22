import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Story from './components/Story';
import Entertainment from './components/Entertainment';
import FoodAndDrinks from './components/Food-Drinks';
import Reviews from './components/Reviews';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero/>
      <Story />
      <Entertainment />
      <FoodAndDrinks />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
