import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cards from './Card';
import './App.css';

function App() {
  console.log(Navbar)
  return (
    <>
    <Navbar />
    <br></br>
    <br></br><br></br>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Cards />
        </div>
        <div className="col-md-6">
          <Cards />
        </div>
        <div className="col-md-3">
          <Cards />
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-3">
          <Cards />
        </div>
        <div className="col-md-6">
          <Cards/>
        </div>
        <div className="col-md-3">
          <Cards />
        </div>
      </div>
    </div>
    <Footer /> 
      
    </>
  );
}

export default App;
