import React, { useEffect } from "react";
import {BrowserRouter as Router} from "react-router-dom" 
import NavBar from './components/NavBar'
import Routes from './components/Routes'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router> 
        <NavBar />
        <main>
          <Routes />
        </main>
      </Router>
      
    </React.Fragment>
  );
}

export default App;
