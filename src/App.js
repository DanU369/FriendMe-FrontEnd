import React, { useEffect } from "react";
import NavBar from './components/NavBar'
import Routes from './components/Routes'
import './App.css';

function App() {
  return (
    <React.Fragment>
        <NavBar />
        <main>
          <Routes />
        </main>
      
    </React.Fragment>
  );
}

export default App;
