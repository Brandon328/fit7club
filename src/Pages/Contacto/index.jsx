import { HiLocationMarker } from "react-icons/hi";

function Contacto() {
  return (
    <>
      {/* <!-- CONTACT --> */}
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="mt-4 mt-lg-0 mt-md-0 col-12">
              <h2
                className="mb-4 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Encuentranos en
              </h2>

              <p
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <HiLocationMarker className="mr-1" />
                Jr Ayacucho 308 Huancayo, Huancayo, Peru
              </p>
              <div
                className="google-map"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6761588717795!2d-75.21345612414314!3d-12.065788388172448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e9648cdb85b2b%3A0xc83dad787224762a!2sJr%20Ayacucho%20308%2C%20Huancayo%2012001!5e0!3m2!1sen!2spe!4v1699568409884!5m2!1sen!2spe"
                  allowFullScreen=""
                  height="450px"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;
