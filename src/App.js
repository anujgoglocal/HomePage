import './App.css';
import React from 'react'
import Navbar from './Components/Navbar.js';
import Home from "./Components/Home.js"
import "./Components/component.css"
import SignInForm from "./Components/SignInForm.jsx"
 
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/"> 
                <Home />
            </Route>
            {/* <Route path="/"> 
                <Creers />
            </Route>
            <Route path="/"> 
                <About />
            </Route>
            <Route path="/"> 
                <FAQ />
            </Route>
             */}
             <Route exact path="/SignInForm"> 
                <SignInForm />
            </Route>
          </Switch>

        </div>
      </Router>
    </>
  );
}

export default App;
