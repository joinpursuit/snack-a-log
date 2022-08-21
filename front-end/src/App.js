import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

import NavBar from "./Components/NavBar";

import Edit from './Pages/Edit'
import Home from './Pages/Home'
import Error from "./Pages/Error"
import New from "./Pages/New"
import Show from "./Pages/Show"
import Index from "./Pages/Index"

function App() {
  return (
    <div className="App">
       <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
