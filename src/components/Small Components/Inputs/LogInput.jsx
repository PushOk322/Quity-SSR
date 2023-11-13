'use client'

import React, { useState, useEffect } from 'react';
import "./log-input.scss";

const LogInput = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (event) => {
    props.setInputValue(event.target.value);
    setIsActive(!!event.target.value); // Set isActive to true when input has a value
  };

  return (
    <>
      <div className={`log-input__container ${isActive ? 'active' : ''}`} style={{ maxWidth: props.maxWidth, width: props.width + "%" }}>
        <label htmlFor={props.id} className={`log-input__label ${isActive ? 'active' : ''}`}>
          {props.label}
        </label>

        {props.textarea ?
          <textarea value={props.value} id={props.id} type={props.type} className="log-input__textarea" placeholder={props.placeholder} onChange={handleInputChange} />
          :
          <input value={props.value} id={props.id} type={props.type} className="log-input" placeholder={props.placeholder} onChange={handleInputChange} />
        }
      </div>
    </>
  );
};

export default LogInput;
