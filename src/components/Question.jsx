import PropTypes from 'prop-types';

function Question({ question, children }) {
  return (
    <div>
      <h2>{question}</h2>
      {children}
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Question;
