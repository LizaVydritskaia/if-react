import React from 'react';

import { Container } from '../Container';

import { footerData } from './footerConfig';

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
          {footerData.map((item) => {
            return (
              <ul key={item.id} className="col-lg-4 col-md-4">
                {item.linkText.map((link, index) => {
                  return (
                    <li key={index}>
                      <a className="footer__link" href="#">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <p className="footer__copyright">
          &#169; 2023Triphouse, Inc. All rights reserved
        </p>
      </Container>
    </footer>
  );
};
