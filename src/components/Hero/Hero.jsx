import { format } from "date-fns";
import style from "./Hero.module.css";
import { FiSearch } from "react-icons/fi";
import heroBg from "../../assets/img/hero-fon.webp";
const Hero = () => {
  const today = new Date();
  const monthYear = format(today, "MMMM yyyy");
  const weekdayDay = format(today, "eeee, do");

  return (
    <section
      className={style.hero}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48),rgba(0, 0, 0, 0.48)), url(${heroBg})`,
      }}
    >
      <div className={`container ${style.heroContainer}`}>
        <h1 className={style.heroTitle}>Weather dashboard</h1>
        <div className={style.heroBox}>
          <p className={style.heroText}>
            Create your personal list of
            <br /> favorite cities and always
            <br /> be aware of the weather.
          </p>

          <div className={style.heroLine}></div>
          <span className={style.heroDate}>
            {monthYear} <br />
            {weekdayDay}
          </span>
        </div>
        <div className={style.heroBoxe}>
          <input
            type="text"
            placeholder="Search location..."
            className={style.heroInput}
          />
          <button type="submit" className={style.heroButton}>
            {" "}
            <FiSearch />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
