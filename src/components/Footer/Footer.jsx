import React from 'react';

import { Container } from '../Container';

import { footerData } from './footerConfig';

import './Footer.css';
import { useFooterStyles } from './Footer.styles';

export const Footer = () => {
  const classes = useFooterStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <div className={classes.logo}>
          <svg className="footer__footer-logo--size">
            <use href="#footer-logo" />
          </svg>
        </div>
        <div className={classes.lists}>
          {footerData.map((item) => {
            return (
              <ul key={item.id} className="col-lg-4 col-md-4">
                {item.linkText.map((link, index) => {
                  return (
                    <li key={index}>
                      <a className={classes.link} href="#">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <p className={classes.copyright}>
          &#169; 2023Triphouse, Inc. All rights reserved
        </p>
      </Container>
    </footer>
  );
};
