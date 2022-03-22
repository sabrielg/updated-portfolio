import React from 'react';
import Form from '../Form';
import pdf from '../../assets/elements/CV.pdf'
import photo from '../../assets/elements/lildog.png'

export default function Contact() {
  return (
    <div>
      <h1>Oh hey</h1>
        <Form />
        <div id="resume" className='btn from-top'>
        <a href= {pdf}>Peep my CV</a>
      </div>
      <div className='eyes-photo'>
          {""}
          <img src={photo} alt="ballerinas"/>{""}
          </div>
    </div>
  );
}