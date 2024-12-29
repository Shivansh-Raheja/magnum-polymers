import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import './App.css'; // Ensure you have your styling
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Include the Header component */}
        <Header />

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add routes for other sections like About Us, Products, etc. */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
