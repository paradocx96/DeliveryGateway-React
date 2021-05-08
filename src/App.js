import React from 'react';
import './App.css';
// import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Address from './pages/Address';
import DeliveryGateway from './pages/DeliveryGateway';

function App() {
  return (
    <>
        <Router>
            {/*<Navbar />*/}
            <Switch>
                <Route path='/' exact component={DeliveryGateway} />
                <Route path='/delivery' exact component={DeliveryGateway} />
                <Route path='/delivery/address' component={Address} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
