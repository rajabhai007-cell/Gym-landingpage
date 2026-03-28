import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trainer from "./components/Trainer";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Trainer />
      <Pricing/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;