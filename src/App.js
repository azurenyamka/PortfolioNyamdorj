import './App.css';
import NavbarMenu from './Component/Navbar';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Project from './pages/Project';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <NavbarMenu/>
      <Hero/>
      <Contact/>
      <Project/>
    </div>
  );
}

export default App;
