import React from 'react';
import style from './Footer.module.css';
import image1 from '../header/social-icon/icons/01.svg';
import image2 from '../header/social-icon/icons/02.svg';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__body}>
          <div className={style.footer__logo}>
            <span>{'{FRONT}'}</span>
            <span>FARHOD</span>
          </div>
          <div className={style.footer__contacts}>
            <ul className={style.footer__list}>
              <li>
                <a
                  href="https://farabek.github.io/my-resume/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>

              <li>
                <a href="tel:+998990471025">+998990471025</a>
              </li>
              <li>
                <a href="mailto:farhodmuhamadiev4@gmail.com">
                  farhodmuhamadiev4@gmail.com
                </a>
              </li>
            </ul>
            <div className={style.footer__icons}>
              <a
                className={style.footer__icon}
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/farhod-rustam/"
              >
                <img src={image1} alt="icon" />
              </a>
              <a
                className={style.footer__icon}
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/farabek"
              >
                <img src={image2} alt="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className={style.footer__label}>
          Developed by Farhod Mukhamadiev in 2024
        </div>
      </div>
    </footer>
  );
};
