import React, { useState } from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Navbar from "./components/NavBar/Navbar";
import Reviews from "./components/Reviews/Reviews";
import SingUpModal from "./components/SignUp/SingUpModal";
import Requests from "./components/Requests/Requests";
import GlobalStyle from "./globalStyles";
import CartProvider from "./store/CartProvider";

function App() {
  const [openLogginModel, setOpenLogginModel] = useState(false);
  const [openrequest, setOpenrequest] = useState(false);

  const openLogginHandler = () => {
    setOpenLogginModel(
      (openLogginModel) => (openLogginModel = !openLogginModel)
    );
  };

  const openRequestHandler = () => {
    setOpenrequest((openrequest) => (openrequest = !openrequest));
  };

  return (
    <>
      <CartProvider>
        <GlobalStyle />
        {openLogginModel && <SingUpModal buttonClicked={openLogginHandler} />}
        {openrequest && <Requests button2Clicked={openRequestHandler} />}
        <Navbar
          buttonClicked={openLogginHandler}
          button2Clicked={openRequestHandler}
        />
      </CartProvider>
      <About />

      <Form />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
