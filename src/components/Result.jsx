import PropTypes from 'prop-types';

function Result({ dog }) {
  return (
    <div>
      <h1>¡La raza de perro que eres es {dog.name}!</h1>
      <p>{dog.description}</p>
      <img src={dog.image} alt={dog.name} style={{ width: '300px', height: 'auto' }} />
    </div>
  );
}

Result.propTypes = {
  dog: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Result;
