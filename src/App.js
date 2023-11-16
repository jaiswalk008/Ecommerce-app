import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Store/Body';
import Footer from './Components/Footer';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import About from './Components/About/About';
import Home from './Components/Home/Home';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Route path="/home"><Home/></Route>
      <Route path="/store"><Body/></Route>
      <Route path="/about"><About/></Route>
      <Footer/>
    </div>
  );
}

export default App;
