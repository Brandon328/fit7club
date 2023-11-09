function Features() {
  return (
    <>
      <section className="feature" id="feature">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
              <h2 className="mb-3 text-white" data-aos="fade-up">
                ¿Nuevo en Fit7Club?
              </h2>

              <h6 className="mb-4 text-white" data-aos="fade-up">
                Your membership is up to 2 months FREE ($62.50 per month)
              </h6>

              <p data-aos="fade-up" data-aos-delay="200">
                Gymso is free HTML template by{" "}
                <a
                  rel="nofollow"
                  href="https://www.tooplate.com"
                  target="_parent"
                >
                  Tooplate
                </a>{" "}
                for your commercial website. Bootstrap v4.2.1 Layout. Feel free
                to use it.
              </p>

              <a
                href="#"
                className="btn custom-btn bg-color mt-3"
                data-aos="fade-up"
                data-aos-delay="300"
                data-toggle="modal"
                data-target="#membershipForm"
              >
                Adquiere una membresía hoy
              </a>
            </div>

            <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
              <div className="about-working-hours">
                <div>
                  <h2
                    className="mb-4 text-white"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    Horario
                  </h2>

                  <strong
                    className="d-block"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    Domingo : Cerrado
                  </strong>

                  <strong
                    className="mt-3 d-block"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    Lunes - Viernes
                  </strong>

                  <p data-aos="fade-up" data-aos-delay="800">
                    6:00 AM - 10:00 PM
                  </p>

                  <strong
                    className="mt-3 d-block"
                    data-aos="fade-up"
                    data-aos-delay="700"
                  >
                    Saturday
                  </strong>

                  <p data-aos="fade-up" data-aos-delay="800">
                    8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
