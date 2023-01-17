import './App.css';
import NavbarMenu from './Component/Navbar';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Project from './pages/Project';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <>
      <div className="App">
        <NavbarMenu/>
        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
