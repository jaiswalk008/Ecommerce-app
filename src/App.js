import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Store/Body';
import Footer from './Components/Footer';
import { Route , Switch , Redirect} from 'react-router-dom/cjs/react-router-dom.min';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import ContactUs from './Components/Contact/ContactUs';
import Product from './Components/Store/Product';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path ="/" exact>
          <Redirect to="/store" />
        </Route>
        <Route path="/home"><Home/></Route>
        <Route path="/store" exact><Body/></Route>
        <Route path="/store/:productId"><Product/></Route>
        <Route path="/about"><About/></Route>
        <Route path="/contactus"><ContactUs/></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
