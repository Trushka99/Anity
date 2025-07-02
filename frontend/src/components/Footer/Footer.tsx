import React from "react";
import style from "./Footer.module.scss";
const Footer: React.FC = () => {
  return (
    <article className={style.footer}>
      <div className={style.footer__cont}>
        <h3 className={style.footer__title}>Be the first to know the news</h3>
        <div className={style.footer__listcont}>
          <div className={style.footer__flex}>
            <input className={style.footer__input}></input>
            <button className={style.footer__arrow} />
          </div>
          <nav>
            <ul className={style.footer__list}>
              <li>About us</li>
              <li>Exclusives</li>
              <li>Contacts</li>
              <li>Manga reviews</li>
              <li>Events</li>
              <li>FAQs</li>
              <li>Anime reviews</li>
              <li>Gallery</li>
              <li>Terms and conditions</li>
              <li>Anime games</li>
              <li>News</li>
            </ul>
          </nav>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>© 2025 Anity. Privacy Policy</p>
      </div>
    </article>
  );
};
export default Footer;
