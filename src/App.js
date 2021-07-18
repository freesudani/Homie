import React from "react";
import About from "./components/About/About";
import Navbar from "./components/NavBar/Navbar";
import Reviews from "./components/Reviews/Reviews";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <About />
      <Reviews />
    </>
  );
}

export default App;
