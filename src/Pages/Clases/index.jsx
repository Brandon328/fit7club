import yogaImg from "../../assets/images/class/yoga-class.jpg";
import crossfitImg from "../../assets/images/class/crossfit-class.jpg";
import cardioImg from "../../assets/images/class/cardio-class.jpg";

import Card2 from "../../Components/Card2";

function Clases() {
  return (
    <>
      {/* <!-- CLASS --> */}
      <section className="class section" id="class">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 text-center mb-5">
              <h6 data-aos="fade-up">Obten un cuerpo perfecto</h6>

              <h2 data-aos="fade-up" data-aos-delay="200">
                Nuestras Clases
              </h2>
            </div>

            <Card2
              estilos="col-lg-4 col-md-6 col-12"
              aosdelay="400"
              src={yogaImg}
              nomClase="Pilates"
              instructor="Bella"
              precio="$50"
              descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing"
            ></Card2>

            <Card2
              estilos="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12"
              aosdelay="500"
              src={crossfitImg}
              nomClase="Areobicos"
              instructor="Mary"
              precio="$66"
              descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing"
            ></Card2>

            <Card2
              estilos="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12"
              aosdelay="600"
              src={cardioImg}
              nomClase="Cardio"
              instructor="Cathe"
              precio="$75"
              descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing"
            ></Card2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clases;
