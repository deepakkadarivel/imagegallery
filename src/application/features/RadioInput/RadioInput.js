import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = props => {
  return (
    <span>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checkedValue === props.value}
        onChange={e => props.onChange(e)}
      />
      <label>{props.label}</label>
    </span>
  );
};

RadioInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checkedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RadioInput;
