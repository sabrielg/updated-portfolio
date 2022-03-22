import React from 'react';
import photo from '../../assets/elements/ballerina-removebg-preview.png'

export default function Home({ currentPage, handlePageChange }) {
  return (
    <div>
      <br/>
        <h2>
        Good Design
        </h2>
        <br/>
        starts with attention.
        <br/>
        is made with intention.
        <br/>
        creates connection.
        <br/><br/>
        <div className='ballerina-photo'>
      {""}
      <img src={photo} alt="ballerinas"/>{""}
      </div>
        <a href='#about'>
      <div className="btn from-top home-button" onClick={() => handlePageChange('About')}>Learn More</div>
      </a>
    </div>
  );
}