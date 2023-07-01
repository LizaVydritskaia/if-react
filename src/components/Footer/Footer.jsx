import React from 'react';
import { useTheme } from 'react-jss';

//config
import { footerData } from './footerConfig';

//components
import { Container } from '../Container';

//styles
import { useFooterStyles } from './Footer.styles';

export const Footer = () => {
  const theme = useTheme();
  const classes = useFooterStyles({ theme });

  return (
    <footer className={classes.root}>
      <Container>
        <div className={classes.footerLogo}>
          <svg className={classes.footerLogoSize}>
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
