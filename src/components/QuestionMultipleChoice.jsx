import { useState } from 'react';
import PropTypes from 'prop-types';

function QuestionMultipleChoice({ options, onSelect }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (option) => {
    const newSelection = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(newSelection);
    onSelect(newSelection);
  };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <input 
            type="checkbox" 
            id={option} 
            value={option} 
            checked={selectedOptions.includes(option)}
            onChange={() => handleChange(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
    </div>
  );
}

QuestionMultipleChoice.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default QuestionMultipleChoice;
