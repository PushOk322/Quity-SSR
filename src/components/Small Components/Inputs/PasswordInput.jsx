import React, { useState } from 'react';
import './password-input.scss';
import Image from 'next/image';

import eyeIcon from '../../../../public/eye-icon.svg';
import eyeIconShut from '../../../../public/eye-icon-shut.svg';

const PasswordInput = (props) => {
  const [passwordVisible, setPasswordVisible] = useState(false); // Start with the password hidden
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (event) => {
    const newPassword = event.target.value;
    setInputValue(newPassword);

    // Validation logic
    const isValid = validatePassword(newPassword);
    if (isValid) {
        setError('');
        props.setInputValue(newPassword);
    } else {
      setError('Минимум 6 символов (букв, цифр и спец. знаков)');
    }

    
  };

  const validatePassword = (password) => {
    // Check if the password has at least 6 characters with letters, numbers, and special characters
    return /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&-_])[A-Za-z\d@$!%*?&-_]{6,}$/.test(password);
  };

  return (
    <>
      <div className="password-input__container">
        <label htmlFor={props.id} className="password-input__label">
          {props.label}
        </label>
        <div className="password-input__input-box">
          <input
            id={props.id}
            type={passwordVisible ? 'text' : 'password'} // Toggle between 'text' and 'password'
            className="password-input__input"
            placeholder={props.placeholder}
            onChange={handleInputChange}
          />

          {passwordVisible ? (
            <Image alt="image not loaded properly"
              src={eyeIcon}
              className="password-input__eye"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <Image alt="image not loaded properly"
              src={eyeIconShut}
              className="password-input__eye"
              onClick={togglePasswordVisibility}
            />
          )}
        </div>
          </div>
        {error && <div className="password-input__error">{error}</div>}
          
    </>
  );
};

export default PasswordInput;
