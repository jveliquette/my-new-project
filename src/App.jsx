import './App.css';
import NavBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Starfield from './components/Starfield';

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh'}}>
      <NavBar />
      <HeroSection />
      <About />
      <Skills />
    </div>
  );
}

export default App;
