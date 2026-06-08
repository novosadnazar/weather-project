import style from "./Header.module.css";
import headerLogo from "../../assets/img/header-logo.png";
import headerUser from "../../assets/img/header-user.png";

const Header = ({ onToggle }) => {
    

  return (
    <>
      <header className={style.header}>
        <div className={`container ${style.headerContainer}`}>
          <a href="./index.html" className={style.headerLink}>
            <img src={headerLogo} alt="logo" className={style.headerLogo} />
          </a>

          <nav className={style.headerNav}>
            <ul className={style.navList}>
              <li className={style.navItem}>
                <a href="#" className={style.navLink}>
                  Who we are
                </a>
              </li>
              <li className={style.navItem}>
                <a href="#" className={style.navLink}>
                  Contacts
                </a>
              </li>
              <li className={style.navItem}>
                <a href="#" className={style.navLink}>
                  Menu
                </a>
              </li>
            </ul>
          </nav>

          <ul className={style.headerList}>
            <li className={style.headerItem}>
              <button type="button" className={style.headerBtn} onClick={onToggle}>
                Sign Up
              </button>
            </li>
            <li className={style.headerItem}>
              <img src={headerUser} alt="user-logo" />
            </li>
          </ul>
        </div>
      </header>

      
    </>
  );
};

export default Header;
