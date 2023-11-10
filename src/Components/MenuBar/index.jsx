import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Logo from "/images/logo.png";

function MenuBar() {
  return (
    <>
      {/* <!-- MENU BAR --> */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img className="rounded-circle w-25 mr-3" src={Logo} alt="logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link smoothScroll">
                  Inicio
                </a>
              </li>

              <li className="nav-item">
                <a href="#about" className="nav-link smoothScroll">
                  Nosotros
                </a>
              </li>

              <li className="nav-item">
                <a href="#class" className="nav-link smoothScroll">
                  Clases
                </a>
              </li>

              <li className="nav-item">
                <a href="#schedule" className="nav-link smoothScroll">
                  Horario
                </a>
              </li>

              <li className="nav-item">
                <a href="#contact" className="nav-link smoothScroll">
                  Contacto
                </a>
              </li>
            </ul>

            <ul className="social-icon ml-lg-3">
              <li>
                <a
                  className="ml-3"
                  href="https://www.facebook.com/Fit7Club"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  className="ml-3"
                  href="https://www.instagram.com/fit7club/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a
                  className="ml-3"
                  href="https://wa.me/+51977200700"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MenuBar;
