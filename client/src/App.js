import React from "react";
import Homepage from './pages/homepage';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Header />
    <div className = "homepage-app">
    <Homepage />
    </div>
    <Footer />
    </>
  );
}

export default App; 
