import React from 'react';

import { Container } from '../Container';

import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__footer-logo">
          <svg className="footer__footer-logo--size">
            <use href="#footer-logo" />
          </svg>
        </div>
        <div className="footer__lists">
          <ul className="col-lg-4 col-md-4">
            <li>About</li>
            <li>How Triphouse works</li>
            <li>Careers</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
          <ul className="col-lg-4 col-md-4">
            <li>Property types</li>
            <li>Guest houses</li>
            <li>Hotels</li>
            <li>Apartments</li>
            <li>Villas</li>
            <li>Holiday homes</li>
            <li>Hostels</li>
          </ul>
          <ul className="col-lg-4 col-md-4">
            <li>Support</li>
            <li>Contact Customer Service</li>
            <li>FAQ</li>
          </ul>
        </div>
        <p className="footer__copyright">
          &#169; 2023Triphouse, Inc. All rights reserved
        </p>
      </Container>
    </footer>
  );
};
