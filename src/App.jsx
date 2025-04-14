import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="text-color-white">
      <Navbar />
      <Home />
      <ContactForm />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
