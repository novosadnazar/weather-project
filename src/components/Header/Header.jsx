// import style from "./Header.module.css";
// import headerLogo from "../../assets/img/header-logo.png";
// import headerUser from "../../assets/img/header-user.png";

// const Header = ({ onToggle }) => {
    

//   return (
//     <>
//       <header className={style.header}>
//         <div className={`container ${style.headerContainer}`}>
//           <a href="./index.html" className={style.headerLink}>
//             <img src={headerLogo} alt="logo" className={style.headerLogo} />
//           </a>

//           <nav className={style.headerNav}>
//             <ul className={style.navList}>
//               <li className={style.navItem}>
//                 <a href="#" className={style.navLink}>
//                   Who we are
//                 </a>
//               </li>
//               <li className={style.navItem}>
//                 <a href="#" className={style.navLink}>
//                   Contacts
//                 </a>
//               </li>
//               <li className={style.navItem}>
//                 <a href="#" className={style.navLink}>
//                   Menu
//                 </a>
//               </li>
//             </ul>
//           </nav>

//           <ul className={style.headerList}>
//             <li className={style.headerItem}>
//               <button type="button" className={style.headerBtn} onClick={onToggle}>
//                 Sign Up
//               </button>
//             </li>
//             <li className={style.headerItem}>
//               <img src={headerUser} alt="user-logo" />
//             </li>
//           </ul>
//         </div>
//       </header>

      
//     </>
//   );
// };

// export default Header;


import { useState } from "react";
import style from "./Header.module.css";
import headerLogo from "../../assets/img/header-logo.png";
import headerUser from "../../assets/img/header-user.png";

const Header = ({ onToggle }) => {
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
        {/* Логотип сайту */}
        <a href="./index.html" className={style.headerLink}>
          <img src={headerLogo} alt="logo" className={style.headerLogo} />
        </a>

        {/* Навігаційне меню */}
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

            {/* ЦІ ЕЛЕМЕНТИ БУДЕ ВИДНО ТІЛЬКИ В МОБІЛЬНОМУ БУРГЕРІ */}
            <li className={style.mobileOnlyItem}>
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
            </li>
            <li className={style.mobileOnlyItem}>
              <div className={style.mobileUserWrapper}>
                <img src={headerUser} alt="user-logo" />
                <span className={style.mobileUserText}>Profile</span>
              </div>
            </li>
          </ul>
        </nav>

        {/* Права частина хедера (для десктопа + кнопка бургера) */}
        <ul className={style.headerList}>
          {/* ЦІ ДВА ЕЛЕМЕНТИ СХОВАЮТЬСЯ НА МОБІЛЦІ */}
          <li className={`${style.headerItem} ${style.desktopOnly}`}>
            <button
              type="button"
              className={style.headerBtn}
              onClick={onToggle}
            >
              Sign Up
            </button>
          </li>
          <li className={`${style.headerItem} ${style.desktopOnly}`}>
            <img src={headerUser} alt="user-logo" />
          </li>

          {/* Кнопка-бургер (показується тільки на мобілці) */}
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