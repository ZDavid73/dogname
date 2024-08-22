import { useState, useEffect } from 'react';
import EmailInput from './components/EmailInput';
import Question from './components/Question';
import QuestionSingleChoice from './components/QuestionSingleChoice';
import QuestionMultipleChoice from './components/QuestionMultipleChoice';
import Result from './components/Result';
import { determineDog } from './components/Dogs';
import emailjs from 'emailjs-com';

function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState(''); // Almacenar el email del usuario
  const [km, setKm] = useState(0); // Para la pregunta de kilómetros

  const handleEmailNext = (userEmail) => {
    setEmail(userEmail); // Guardar el email en el estado
    setStep(step + 1);
  };

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setStep(step + 1);
  };

  const handleKmChange = (value) => {
    setKm(Math.max(0, km + value));
  };

  const handleKmSubmit = () => {
    setAnswers([...answers, `${km} km`]);
    setStep(step + 1);
  };

  const getResult = () => {
    return determineDog(answers);
  };

  useEffect(() => {
    if (step > 7) {
      const dog = determineDog(answers); 
      const templateParams = {
        to_email: email,
        dog_name: dog.name,
        dog_description: dog.description,
      };
  
      emailjs.send(
        'service_uw5jrix', // Reemplaza con tu Service ID
        'b0DwEhCY_-_uN1t8R', // Reemplaza con tu Template ID
        templateParams,
        'b0DwEhCY_-_uN1t8R' // Reemplaza con tu Public Key
      ).then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }).catch((err) => {
        console.error('Failed to send email. Error: ', err);
      });
    }
  }, [step, email, answers]); 
  

  return (
    <div>
      {step === 0 && <EmailInput onNext={handleEmailNext} />}
      {step === 1 && (
        <Question question="¿Qué tipo de hogar tienes?">
          <QuestionSingleChoice options={['Apartamento', 'Casa grande', 'Campo']} onSelect={handleAnswer} />
        </Question>
      )}
      {step === 2 && (
        <Question question="¿Cuánto tiempo puedes dedicarle a tu perro?">
          <QuestionMultipleChoice options={['Poco', 'Moderado', 'Mucho']} onSelect={handleAnswer} />
        </Question>
      )}
      {step === 3 && (
        <Question question="¿Tienes otros animales en casa?">
          <QuestionSingleChoice options={['Sí', 'No']} onSelect={handleAnswer} />
        </Question>
      )}
      {step === 4 && (
        <Question question="¿Prefieres un perro de gran tamaño?">
          <QuestionSingleChoice options={['Sí', 'No']} onSelect={handleAnswer} />
        </Question>
      )}
      {step === 5 && (
        <Question question="¿Cuánto tiempo puedes dedicar al ejercicio de tu perro?">
          <QuestionSingleChoice options={['Poco', 'Moderado', 'Mucho']} onSelect={handleAnswer} />
        </Question>
      )}
      {step === 6 && (
        <Question question="¿Cuántos kilómetros corres al día?">
          <div>
            <button onClick={() => handleKmChange(-1)}>-</button>
            <span>{km} km</span>
            <button onClick={() => handleKmChange(1)}>+</button>
            <button onClick={handleKmSubmit}>Siguiente</button>
          </div>
        </Question>
      )}
      {step === 7 && (
        <Question question="¿Cuál es tu nivel de experiencia con perros?">
          <QuestionSingleChoice options={['Principiante', 'Intermedio', 'Avanzado']} onSelect={handleAnswer} />
        </Question>
      )}
      {step > 7 && <Result dog={getResult()} />}
    </div>
  );
}

export default App;
