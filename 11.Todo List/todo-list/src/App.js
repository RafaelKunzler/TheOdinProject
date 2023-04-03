import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

// components
import Header from './components/Header/Header';

// pages
import Home from "./pages/Home/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
