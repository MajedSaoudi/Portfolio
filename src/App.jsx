import './App.css';
import Navbar from './assets/components/Navbar';
import Home from './assets/components/Home';
import About from './assets/components/About';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';
import Footer from './assets/components/Footer';
function App() {

  return (
    <div className="App">
     
     <header>
      <Navbar />
      
     </header>
     
     <Home />
     <About />
     <Projects />
     <Contact />
     <footer>
      <Footer />
     </footer>
    </div>
  );
}

export default App;
