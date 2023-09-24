import React, { useState } from 'react';
import './SignIn.css';
import ml from '../../Assets/login_m.svg';
import { navigate, useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const handleNavigate = (str) => {
    navigate(str);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleNextClick = () => {
    if (inputValue.trim() !== '') {
      handleNavigate('/gg');
    }
  };

  return (
    <div className='SignIn_Page'>
      <div className='SignIn_Card'>
        <img src={ml} alt='img' />
        <div className='SignIn'>
          <p>Sign In</p>
        </div>
        <div className='main_div'>
          <div className='email_box'>
            <input
              type='text'
              placeholder='Email, Phone or Skype'
              className='input_box'
              value={inputValue}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='details_box'>
            <p>No account?</p>
            <p className='create'>Create one</p>
          </div>
          <p className='access'>Can't access your account?</p>
          <div className='buttons'>
            <button className='back'>Back</button>
            <button className='next' onClick={handleNextClick} disabled={inputValue.trim() === ''}>
              Next
            </button>
          </div>
        </div>
      </div>
      <div className='SignIn_Options'></div>
    </div>
  );
}

export default SignIn;
