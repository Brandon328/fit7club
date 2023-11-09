import PropTypes from "prop-types";

function Card1({ src, aosdelay, name, ocupacion, estilos }) {
  return (
    <>
      <div className={estilos} data-aos="fade-up" data-aos-delay={aosdelay}>
        <div className="team-thumb">
          <img src={src} className="img-fluid" alt="Trainer" />

          <div className="team-info d-flex flex-column">
            <h3>{name}</h3>
            <span>{ocupacion}</span>

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
    </>
  );
}
Card1.propTypes = {
  src: PropTypes.string.isRequired,
  aosdelay: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  ocupacion: PropTypes.string.isRequired,
  estilos: PropTypes.string.isRequired,
};

export default Card1;
