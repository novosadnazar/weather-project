import { useState } from "react";
import style from "./Header.module.css";
import headerLogo from "../../assets/img/header-logo.png";
import headerUser from "../../assets/img/header-user.png";

const Header = ({ onToggle, username }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={style.header}>
      <div className={`container ${style.headerContainer}`}>
        <a href="./index.html" className={style.headerLink}>
          <img src={headerLogo} alt="logo" className={style.headerLogo} />
        </a>

        <nav
          className={`${style.headerNav} ${isMenuOpen ? style.navOpen : ""}`}
        >
          <ul className={style.navList}>
            <li className={style.navItem}>
              <a href="#" className={style.navLink} onClick={handleLinkClick}>
                Who we are
              </a>
            </li>
            <li className={style.navItem}>
              <a href="#" className={style.navLink} onClick={handleLinkClick}>
                Contacts
              </a>
            </li>
            <li className={style.navItem}>
              <a href="#" className={style.navLink} onClick={handleLinkClick}>
                Menu
              </a>
            </li>

         
            <li className={style.mobileOnlyItem}>
              {username ? (
                <div className={style.heroMobileGreeting}>
                  Hello, <span className={style.heroUserName}>{username}!</span>
                </div>
              ) : (
                <button
                  type="button"
                  className={style.headerBtn}
                  onClick={() => {
                    onToggle();
                    handleLinkClick();
                  }}
                >
                  Sign Up
                </button>
              )}
            </li>
            <li className={style.mobileOnlyItem}>
              <div className={style.mobileUserWrapper}>
                <img src={headerUser} alt="user-logo" />
                <span className={style.mobileUserText}>Profile</span>
              </div>
            </li>
          </ul>
        </nav>

        <ul className={style.headerList}>
          <li className={style.headerItem}>
            {username ? (
              <div className={style.desktopGreeting}>
                Hello, <span className={style.userName}>{username}!</span>
              </div>
            ) : (
              <button
                type="button"
                className={style.headerBtn}
                onClick={onToggle}
              >
                Sign Up
              </button>
            )}
          </li>
          <li className={style.headerItem }>
            <img src={headerUser} alt="user-logo" />
          </li>

          <li className={style.burgerItem}>
            <button
              type="button"
              className={`${style.burgerBtn} ${
                isMenuOpen ? style.burgerActive : ""
              }`}
              onClick={toggleMobileMenu}
            >
              <span></span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
