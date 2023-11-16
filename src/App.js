import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import About from './Components/About/About';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Route path="/home"><Body/></Route>
      <Route path="/about"><About/></Route>
      <Footer/>
    </div>
  );
}

export default App;
