import PropTypes from "prop-types";

function Card2({
  estilos,
  aosdelay,
  src,
  nomClase,
  instructor,
  precio,
  descripcion,
}) {
  return (
    <div className={estilos} data-aos="fade-up" data-aos-delay={aosdelay}>
      <div className="class-thumb">
        <img src={src} className="img-fluid" alt="Class" />

        <div className="class-info">
          <h3 className="mb-1">{nomClase}</h3>

          <span>
            <strong>Instructor(a):</strong> {instructor}
          </span>

          <span className="class-price">{precio}</span>

          <p className="mt-3">{descripcion}</p>
        </div>
      </div>
    </div>
  );
}
Card2.propTypes = {
  estilos: PropTypes.string.isRequired,
  aosdelay: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  nomClase: PropTypes.string.isRequired,
  instructor: PropTypes.string.isRequired,
  precio: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};

export default Card2;
