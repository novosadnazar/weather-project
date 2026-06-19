import React from "react";
import styles from "./Footer.module.css";
import headerLogo from "../../assets/img/header-logo.png";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contacts" className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={styles.logoLink} aria-label="Головна сторінка">
          <img
            src={headerLogo}
            alt="Логотип компанії"
            className={styles.logoImg}
          />
        </a>

        <address className={styles.addressWrapper}>
          <div className={styles.addressBlock}>
            <span className={styles.sectionTitle}>Address</span>
            <ul className={styles.addressList}>
              <li>Svobody str. 35</li>
              <li>Kyiv</li>
              <li>Ukraine</li>
            </ul>
          </div>

          <div className={styles.contactsBlock}>
            <p className={styles.sectionTitle}>Contact us</p>
            <ul className={styles.socialList}>
              <li>
                <a
                  className={`${styles.socialLink} ${styles.instagram}`}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <IoLogoInstagram />
                </a>
              </li>
              <li>
                <a
                  className={`${styles.socialLink} ${styles.facebook}`}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  className={`${styles.socialLink} ${styles.whatsapp}`}
                  href="https://wa.me/your_number"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </li>
            </ul>
          </div>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
