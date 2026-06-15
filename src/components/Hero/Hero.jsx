import { useState } from "react";
import { format } from "date-fns";
import style from "./Hero.module.css";
import { FiSearch } from "react-icons/fi";
import heroBg from "../../assets/img/hero-fon.webp";
const Hero = ({city}) => {
const [search, setSearch] = useState("")

  const today = new Date();
  const monthYear = format(today, "MMMM yyyy");
  const weekdayDay = format(today, "eeee, do");

  const handleSearch = (evt) => {
   setSearch(evt.target.value)
}

  const handleSubmit = (evt) => {
    evt.preventDefault()
    city(search)
setSearch("")
  }
  
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
        <form className={style.heroBoxe} onSubmit={handleSubmit}>
          
          <input
            type="text"
            placeholder="Search location..."
            className={style.heroInput}
            value={search}
            onChange={handleSearch}
          />
          <button type="submit" className={style.heroButton}>
            {" "}
            <FiSearch />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
