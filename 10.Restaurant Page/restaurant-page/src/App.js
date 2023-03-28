import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// components
import NavBar from './components/NavBar';

// pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';


function App() {
  return (
    <div className="App">  
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
          </Routes>
        </div>
      </BrowserRouter> 
    </div>
  );
}

export default App;
