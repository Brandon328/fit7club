import teamImage from "images/team/team-image.jpg";
import teamImage01 from "images/team/team-image01.jpg";
import Card1 from "../../Components/Card1";

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

            <Card1
              src={teamImage}
              aosdelay="700"
              name="Mary Yan"
              ocupacion="Instructor de Pilates"
              estilos="ml-lg-auto col-lg-3 col-md-6 col-12"
            ></Card1>

            <Card1
              src={teamImage01}
              aosdelay="800"
              name="Catherina"
              ocupacion="Entrenadora"
              estilos="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12"
            ></Card1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nosotros;
