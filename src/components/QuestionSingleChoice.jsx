import PropTypes from 'prop-types';

function QuestionSingleChoice({ options, onSelect }) {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <input 
            type="radio" 
            id={option} 
            name="question" 
            value={option}
            onChange={() => onSelect(option)} 
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
}

QuestionSingleChoice.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default QuestionSingleChoice;
