import MenuBar from "./Components/MenuBar";
import Hero from "./Pages/Hero";
import Features from "./Pages/Features";
import Nosotros from "./Pages/Nosotros";
import Clases from "./Pages/Clases";
import Contacto from "./Pages/Contacto";
import Footer from "./Pages/Footer";
import Modal from "./Components/Modal";

function App() {
  return (
    <>
      <MenuBar></MenuBar>
      <Hero></Hero>
      <Features></Features>
      <Nosotros></Nosotros>
      <Clases></Clases>
      <Contacto></Contacto>
      <Footer></Footer>
      <Modal></Modal>
    </>
  );
}

export default App;
