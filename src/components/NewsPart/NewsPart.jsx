import React from "react";
import {
  WiThermometer,
  WiHumidity,
  WiBarometer,
  WiStrongWind,
} from "react-icons/wi";
import { BsEye } from "react-icons/bs";
// Імпортуємо стилі як об'єкт
import styles from "./NewsPart.module.css";

const NewsPart = ({ selectedCity, weatherDetails }) => {
  if (!selectedCity) return null;

  return (
    <section className={styles.weatherDetailsSection}>
      <div className={styles.widgetsGrid}>
        {/* Feels like */}
        <div className={styles.widgetCard}>
          <p className={styles.widgetTitle}>Feels like</p>
          <h3 className={styles.widgetValue}>
            {selectedCity.feels_like !== undefined
              ? `${selectedCity.feels_like}°C`
              : "29.2°C"}
          </h3>
          <div className={`${styles.widgetIconWrapper} ${styles.thermometer}`}>
            <WiThermometer />
          </div>
        </div>

        {/* Min / Max */}
        <div className={styles.widgetCard}>
          <div className={styles.minMaxWrapper}>
            <p className={styles.widgetTitle}>Min °C</p>
            <h3 className={styles.widgetValue}>
              {selectedCity.temp_min !== undefined
                ? `${selectedCity.temp_min}°C`
                : "27.9°C"}
            </h3>
            <p className={styles.widgetTitle} style={{ marginTop: "10px" }}>
              Max °C
            </p>
            <h3 className={styles.widgetValue}>
              {selectedCity.temp_max !== undefined
                ? `${selectedCity.temp_max}°C`
                : "27.9°C"}
            </h3>
          </div>
        </div>

        {/* Humidity */}
        <div className={styles.widgetCard}>
          <p className={styles.widgetTitle}>Humidity</p>
          <h3 className={styles.widgetValue}>
            {selectedCity.humidity ? `${selectedCity.humidity}%` : "59%"}
          </h3>
          <div className={`${styles.widgetIconWrapper} ${styles.humidity}`}>
            <WiHumidity />
          </div>
        </div>

        {/* Pressure */}
        <div className={styles.widgetCard}>
          <p className={styles.widgetTitle}>Pressure</p>
          <h3 className={styles.widgetValue}>
            {selectedCity.pressure ? `${selectedCity.pressure} Pa` : "1007 Pa"}
          </h3>
          <div className={`${styles.widgetIconWrapper} ${styles.pressure}`}>
            <WiBarometer />
          </div>
        </div>

        {/* Wind speed */}
        <div className={styles.widgetCard}>
          <p className={styles.widgetTitle}>Wind speed</p>
          <h3 className={styles.widgetValue}>
            {selectedCity.wind ? `${selectedCity.wind} m/s` : "3.17 m/s"}
          </h3>
          <div className={`${styles.widgetIconWrapper} ${styles.wind}`}>
            <WiStrongWind />
          </div>
        </div>

        {/* Visibility */}
        <div className={styles.widgetCard}>
          <p className={styles.widgetTitle}>Visibility</p>
          <h3 className={styles.widgetValue}>
            {selectedCity.visibility
              ? `${selectedCity.visibility} km`
              : "Unlimited"}
          </h3>
          <div className={`${styles.widgetIconWrapper} ${styles.visibility}`}>
            <BsEye />
          </div>
        </div>
      </div>

      {/* Погодинний прогноз */}
      {weatherDetails?.list && (
        <div className={styles.hourlyForecastBlock}>
          <h3>Hourly forecast (Next 24h)</h3>
          <div className={styles.hourlyForecastList}>
            {weatherDetails.list.slice(0, 8).map((hour, index) => (
              <div key={index} className={styles.hourlyForecastItem}>
                <p className={styles.hourlyTime}>
                  {hour.dt_txt?.split(" ")[1]?.slice(0, 5) || "—"}
                </p>
                <img
                  src={`https://openweathermap.org/img/wn/${hour.weather[0]?.icon}.png`}
                  alt="icon"
                  className={styles.hourlyIcon}
                />
                <p className={styles.hourlyTemp}>
                  {Math.round(hour.main.temp)}°C
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default NewsPart;
