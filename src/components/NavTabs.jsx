import React from 'react';
import '../styles/NavTabs.css';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav my-app-nav-ul justify-content-end">
      <li className="nav-item ">
        <a
          href="#Aboutme"
          onClick={() => handlePageChange('Aboutme')}
          className={`nav-link anchorTags ${currentPage === 'Aboutme' ? 'active' : ''}`}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={`nav-link anchorTags ${currentPage === 'Portfolio' ? 'active' : ''}`}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={`nav-link anchorTags ${currentPage === 'Resume' ? 'active' : ''}`}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={`nav-link anchorTags ${currentPage === 'Contact' ? 'active' : ''}`}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
