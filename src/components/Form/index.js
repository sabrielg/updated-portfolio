import React, { useState } from 'react';
import './style.css';

import { validateEmail } from '../../utils/helpers';

function Form() {

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    const formData = {
      ...contactInfo,
      [inputType]: inputValue
    }


    setContactInfo(formData)
  };



  return (
    <div>
      <form className="form">
        <input
          value={contactInfo.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={contactInfo.name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={contactInfo.message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button class="submit-button" type="button">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
