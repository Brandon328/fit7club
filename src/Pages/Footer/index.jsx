import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <>
      {/* <!-- FOOTER --> */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p className="copyright-text">
                Copyright &copy; 2020 Gymso Fitness Co.
                <br />
                Design: <a href="https://www.tooplate.com">Tooplate</a>
              </p>
            </div>

            <div className="d-flex justify-content-end col-lg-6 col-12">
              <ul className="social-icon ml-lg-3">
                <li>
                  <a
                    className="ml-4"
                    href="https://www.facebook.com/Fit7Club"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    className="ml-4"
                    href="https://www.instagram.com/fit7club/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li>
                  <a
                    className="ml-4"
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
        </div>
      </footer>
    </>
  );
}

export default Footer;
