import React from "react";
import { FiRefreshCw, FiTrash2, FiHeart } from "react-icons/fi";
import styles from "./CityCard.module.css";

function CityCard({ city, onRefresh, onDelete, onSelect, onFavorite }) {
    return (
      <div className={`container ${styles.cardContainer}`}>
        <article className={styles.card} onClick={() => onSelect(city)}>
          <div className={styles.weatherHeader}>
            <h3 className={styles.cityName}>{city.name}</h3>
            <span className={styles.country}>{city.country}</span>
          </div>

          <div className={styles.timeSection}>
            <time className={styles.currentTime}>{city.time}</time>
            <button
              type="button"
              className={styles.btnHourly}
              onClick={(evt) => {
                evt.stopPropagation();
              }}
            >
              Hourly forecast
            </button>
          </div>

          <div className={styles.dateSection}>
            <span className={styles.date}>{city.date}</span>
            <span className={styles.divider}>|</span>
            <span className={styles.day}>{city.day}</span>
          </div>

          <div className={styles.weatherIconWrapper}>
            <img
              src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`}
              alt={city.condition}
              className={styles.weatherIcon}
            />
          </div>

          <div className={styles.temperatureSection}>
            <span className={styles.temperature}>{city.temp}°C</span>
          </div>

          <div
            className={styles.weatherFooter}
            onClick={(evt) => evt.stopPropagation()}
          >
            <button
              type="button"
              className={styles.controlBtn}
              onClick={() => onRefresh(city.name)}
              title="Update weather"
            >
              <FiRefreshCw className={styles.refreshIcon} />
            </button>

            <button
              type="button"
              className={styles.controlBtn}
              onClick={() => onFavorite && onFavorite(city.id)}
              title="Add to favorites"
            >
              <FiHeart className={styles.heartIcon} />
            </button>

            <button
              type="button"
              className={styles.btnSeeMore}
              onClick={() => onSelect(city)}
            >
              See more
            </button>

            <button
              type="button"
              className={styles.controlBtn}
              onClick={() => onDelete(city.id)}
              title="Delete city"
            >
              <FiTrash2 className={styles.deleteIcon} />
            </button>
          </div>
        </article>
      </div>
    );
}

export default CityCard;
