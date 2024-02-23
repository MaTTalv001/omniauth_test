import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
