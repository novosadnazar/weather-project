import React from "react";
import CityCard from "../CityCard/CityCard";
import style from "./CardList.module.css"


const CardList = ({ cities, onRefresh, onDelete, onSelect, onFavorite }) => {
  return (
    <section className={style.list}>
      <div className={style.grid}>
        {cities.map((city) => (
          <CityCard
            key={city.id}
            city={city}
            onRefresh={onRefresh}
            onDelete={onDelete}
            onSelect={onSelect}
            onFavorite={onFavorite}
          />
        ))}
      </div>
    </section>
  );
};

export default CardList