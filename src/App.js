import React from "react";
import "./app.css";
import { Header, About, Links, Projects, Client, Footer } from "./components";

import { Navbar } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="white_bg">
        <Navbar />
        <Header />
      </div>
      <About />
      <Links />
      <Projects />
      <Client />
      <Footer />
    </div>
  );
}

export default App;
