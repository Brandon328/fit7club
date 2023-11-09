import yogaImg from "../../assets/images/class/yoga-class.jpg";
import crossfitImg from "../../assets/images/class/crossfit-class.jpg";
import cardioImg from "../../assets/images/class/cardio-class.jpg";

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

            <div
              className="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="class-thumb">
                <img src={yogaImg} className="img-fluid" alt="Class" />

                <div className="class-info">
                  <h3 className="mb-1">Pilates</h3>

                  <span>
                    <strong>Trained by</strong> - Bella
                  </span>

                  <span className="class-price">$50</span>

                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="class-thumb">
                <img src={crossfitImg} className="img-fluid" alt="Class" />

                <div className="class-info">
                  <h3 className="mb-1">Areobicos</h3>

                  <span>
                    <strong>Trained by</strong> - Mary
                  </span>

                  <span className="class-price">$66</span>

                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mt-5 mt-lg-0 col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="class-thumb">
                <img src={cardioImg} className="img-fluid" alt="Class" />

                <div className="class-info">
                  <h3 className="mb-1">Cardio</h3>

                  <span>
                    <strong>Trained by</strong> - Cathe
                  </span>

                  <span className="class-price">$75</span>

                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
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

export default Clases;
