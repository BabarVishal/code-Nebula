// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componat/Navbar';
import Home from './Componat/Home';
import Blogs from './Componat/Blogs';

import Post from './Componat/Post';

import './index.css'


function App() {
  return (
    <Router>
      <div>
        <div className="fix">
        <Navbar />
        
        </div>
       
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Post" element={<Post />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
