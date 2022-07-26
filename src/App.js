import Cards from './component/Cards';
import Category from './component/Category';
import Food from './component/Food';
import Hero from './component/Hero';
import Navbar from './component/Navbar'
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
