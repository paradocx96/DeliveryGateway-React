import React from 'react';
import './App.css';
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Address from './pages/Address';
import Setting from './pages/Setting';

function App() {
  return (
    <>
        <Router>
            {/*<Navbar />*/}
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/product' component={Product} />
                <Route path='/delivery' component={Address} />
                <Route path='/setting' component={Setting} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
