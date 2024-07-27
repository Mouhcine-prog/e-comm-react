// Importation des styles
import './App.css';

// Importation des composants
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Alias pour BrowserRouter
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Cloth from './Pages/Cloth';
import Shop from './Pages/Shop';
import Pages from './Pages/Pages';
import Contact from './Pages/Contact';
import Learn from './Learn/Learn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cloth" element={<Cloth />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Learn/>
      </BrowserRouter>
    </div>
  );
}

export default App;
