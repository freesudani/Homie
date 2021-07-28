import React from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Navbar from "./components/NavBar/Navbar";
import Reviews from "./components/Reviews/Reviews";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <About />
      <Form />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
