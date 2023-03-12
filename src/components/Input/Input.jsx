import React from 'react';
import PropTypes from 'prop-types';
import './Input.css'

export function Input (props) {
    const { size, label, ...rest } = props
    return (
      <input className={`input ${size}`} placeholder = {label} {...rest}/>
    );
  };

  Input.propTypes = {
      size: PropTypes.oneOf(['small', 'medium', 'large']),
      label: PropTypes.string.isRequired,
  }

  Input.defaultProps = {
      size: 'small',
      //label: 'search',
  }