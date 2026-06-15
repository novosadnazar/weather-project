import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Hero from "./components/Hero/Hero";

function App() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [cityName, setCityName] = useState("");

  const handleToggleModal = () => {
    setOpen((prev) => !prev);
  };

  const handleHeroSearch = (newCity) => {
    setCityName(newCity);
    console.log(cityName, "in app");
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q={cityName}&units=metric&appid=da90f2e46287491baefdd051c0002a45`
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, [cityName]);

  return (
    <>
      <Header onToggle={handleToggleModal} username={username} />

      {open && <Modal onToggle={handleToggleModal} setUsername={setUsername} />}

      <Hero city={handleHeroSearch} />
    </>
  );
}

export default App;
