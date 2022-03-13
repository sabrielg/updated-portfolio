import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './Footer';
import logo from '../assets/elements/eyes.png';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <header className='flex-row px-1 d-flex justify-content-between'>
      <h1>
        <a href='/'>
          <span> <img src={logo} alt="something here"/> Sabriel Gee </span>
          </a>
      </h1>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      <main>
      {renderPage()}
      <Footer/>
      </main>
    </div>
  );
}
