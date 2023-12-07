import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './Components/Context/AuthContext';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Store/Body';
import Footer from './Components/Footer';
import { Route , Switch , Redirect} from 'react-router-dom/cjs/react-router-dom.min';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import ContactUs from './Components/Contact/ContactUs';
import Product from './Components/Store/Product';
import Login from './Components/Login';
function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path ="/" exact>
          {authCtx.isLoggedIn && <Redirect to="/store" />}
          {!authCtx.isLoggedIn && <Redirect to="/login" />}

        </Route>
        <Route path="/home"><Home/></Route>
        <Route path="/store" exact>
        {authCtx.isLoggedIn && <Body/>}
        {!authCtx.isLoggedIn && <Redirect to="/login" />}

        </Route>
        <Route path="/store/:productId">
        {authCtx.isLoggedIn && <Product/>}
        {!authCtx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/about"><About/></Route>
        <Route path="/login"><Login/></Route>

        <Route path="/contactus"><ContactUs/></Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
