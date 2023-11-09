import teamImage from "../../assets/images/team/team-image.jpg";
import teamImage01 from "../../assets/images/team/team-image01.jpg";

function Nosotros() {
  return (
    <>
      {/* <!-- ABOUT --> */}
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
              <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">
                Nuestra filosofía se basa
              </h2>

              <p data-aos="fade-up" data-aos-delay="400">
                EN UN CONCEPTO DE SALUD HOLÍSTICA.
              </p>
              <p data-aos="fade-up" data-aos-delay="400">
                Por eso, trabajamos de forma integral todas las partes de tu
                bienestar.
              </p>

              <p data-aos="fade-up" data-aos-delay="500">
                Combinamos una novedosa metodología de entrenamiento con el
                acompañamiento nutricional , terapeutico y de coaching
                motivacional que necesitas.
              </p>
            </div>

            <div
              className="ml-lg-auto col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="team-thumb">
                <img src={teamImage} className="img-fluid" alt="Trainer" />

                <div className="team-info d-flex flex-column">
                  <h3>Mary Yan</h3>
                  <span>Instructor de Yoga</span>

                  <ul className="social-icon mt-3">
                    <li>
                      <a href="#" className="fa fa-twitter"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="team-thumb">
                <img src={teamImage01} className="img-fluid" alt="Trainer" />

                <div className="team-info d-flex flex-column">
                  <h3>Catherina</h3>
                  <span>Entrenadora</span>

                  <ul className="social-icon mt-3">
                    <li>
                      <a href="#" className="fa fa-instagram"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-facebook"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nosotros;
