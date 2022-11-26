import React from "react";
import NavBar  from "./Components/NavBar/index";
import Section from "./Components/Section/index";


import "./App.css";

function App() {

  return (
    <div className="app">
        <header className="header--navbar">
          <NavBar />
        </header >

        <main className="container">
            <Section />    
        </main>
    </div>
  );
}

export default App;
