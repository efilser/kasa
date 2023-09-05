import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Banner from './components/Banner';
import Thumb from './components/Thumb';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <Thumb />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
