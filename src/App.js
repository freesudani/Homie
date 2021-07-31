import React, { useState } from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Navbar from "./components/NavBar/Navbar";
import Reviews from "./components/Reviews/Reviews";
import SingUpModal from "./components/SignUp/SingUpModal";
import Requests from "./components/Requests/Requests";
import GlobalStyle from "./globalStyles";

function App() {
  const [openLogginModel, setOpenLogginModel] = useState(false);
  const openLogginHandler = () => {
    setOpenLogginModel(
      (openLogginModel) => (openLogginModel = !openLogginModel)
    );
  };

  return (
    <>
      <GlobalStyle />
      {openLogginModel && <SingUpModal buttonClicked={openLogginHandler} />}
      <Navbar buttonClicked={openLogginHandler} />
      <About />
      <Requests />
      <Form />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
