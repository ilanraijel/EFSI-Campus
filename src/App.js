import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import './App.css';

function App() {
  console.log(Header)
  return (
    <>
    <Header />
    <br></br>
    <br></br><br></br>
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-6">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-3">
          <Card />
        </div>
        <div className="col-md-6">
          <Card />
        </div>
        <div className="col-md-3">
          <Card />
        </div>
      </div>
    </div>
    <Footer /> 
      
    </>
  );
}

export default App;
