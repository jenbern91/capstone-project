import './App.css';
import './components/layout/Navbar.css';
import './components/layout/Header.css';
import './components/layout/Main.css';
import './components/layout/Footer.css';

import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Nav />
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;
