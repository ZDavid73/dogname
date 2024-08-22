import { useState } from 'react';
import PropTypes from 'prop-types';

function EmailInput({ onNext }) {
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (email) {
      onNext(email);
    } else {
      alert('Por favor, ingresa tu correo electrónico.');
    }
  };

  return (
    <div>
      <h1>Ingresa tu correo para iniciar el test:</h1>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="correo@ejemplo.com"
      />
      <button onClick={handleNext}>Comenzar</button>
    </div>
  );
}

EmailInput.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default EmailInput;
