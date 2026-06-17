// import { useState, useEffect } from "react";
// import "./App.css";
// import "./index.css";
// import Header from "./components/Header/Header";
// import Modal from "./components/Modal/Modal";
// import Hero from "./components/Hero/Hero";
// import CardList from "./components/CardList/CardList";

// const API_KEY = "da90f2e46287491baefdd051c0002a45";

// function App() {
//   const [open, setOpen] = useState(false);
//   const [username, setUsername] = useState("");
//   const [cityName, setCityName] = useState("");

//   const handleToggleModal = () => {
//     setOpen((prev) => !prev);
//   };

//   const handleHeroSearch = (newCity) => {
//     setCityName(newCity);
//     console.log(cityName, "in app");
//   };

//   useEffect(() => {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
//     )
//       .then((res) => res.json())
//       .then((res) => console.log(res));
//   }, [cityName]);

//   return (
//     <>
//       <Header onToggle={handleToggleModal} username={username} />

//       {open && <Modal onToggle={handleToggleModal} setUsername={setUsername} />}

//       <Hero city={handleHeroSearch} />

//       <CardList
//         cities={cities}
//         onRefresh={handleRefreshCity}
//         onDelete={handleDeleteCity}
//         onSelect={(city) => setSelectedCity(city)} 
//       />
//     </>
//   );
// }

// export default App;



import { useState, useEffect } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Hero from "./components/Hero/Hero";
import CardList from "./components/CardList/CardList";

const API_KEY = "da90f2e46287491baefdd051c0002a45";

function App() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [cityName, setCityName] = useState("");
  const [selectedCity, setSelectedCity] = useState(null); // Стан для вибраного міста

  // Ініціалізація міст із localStorage (якщо порожньо — буде пустий масив)
  const [cities, setCities] = useState(() => {
    const savedCities = localStorage.getItem("weather_cities");
    return savedCities ? JSON.parse(savedCities) : [];
  });

  const handleToggleModal = () => {
    setOpen((prev) => !prev);
  };

  // Функція, яку викликає Hero при сабміті форми пошуку
  const handleHeroSearch = (newCity) => {
    if (!newCity.trim()) return;

    // Перевірка, чи місто вже є у списку
    const isExist = cities.some(
      (city) => city.name.toLowerCase() === newCity.toLowerCase()
    );
    if (isExist) {
      alert("Це місто вже є у вашому списку!");
      return;
    }

    setCityName(newCity);
  };

  // Збереження міст у localStorage при кожній зміні масиву cities
  useEffect(() => {
    localStorage.setItem("weather_cities", JSON.stringify(cities));
  }, [cities]);

  // Запит до API при отриманні нового імені міста з пошуку
  useEffect(() => {
    if (!cityName) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Місто не знайдено.");
        return res.json();
      })
      .then((data) => {
        const parsedCity = parseWeatherData(data);
        // Додаємо нове місто в початок списку
        setCities((prev) => [parsedCity, ...prev]);
        // Скидаємо cityName, щоб можна було шукати це ж місто повторно після видалення
        setCityName("");
      })
      .catch((error) => {
        alert(error.message);
        setCityName("");
      });
  }, [cityName]);

  // Функція для оновлення погоди конкретного міста
  const handleRefreshCity = (name) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Не вдалося оновити дані.");
        return res.json();
      })
      .then((data) => {
        const updatedCity = parseWeatherData(data);
        setCities((prev) =>
          prev.map((c) => (c.id === data.id ? updatedCity : c))
        );
        alert(`Дані для міста ${data.name} оновлено!`);
      })
      .catch((error) => alert(error.message));
  };

  // Функція для видалення міста зі списку
  const handleDeleteCity = (id) => {
    setCities((prev) => prev.filter((city) => city.id !== id));
    // Якщо видалене місто було відкрите в деталях — закриваємо його
    if (selectedCity && selectedCity.id === id) {
      setSelectedCity(null);
    }
  };

  // Допоміжна функція для обробки та форматування даних з OpenWeatherMap
  const parseWeatherData = (data) => {
    // Розрахунок часу в обраному місті через зміщення timezone
    const utcDate = new Date();
    const localTimeMillis =
      utcDate.getTime() +
      utcDate.getTimezoneOffset() * 60000 +
      data.timezone * 1000;
    const cityDateObject = new Date(localTimeMillis);

    const formattedTime = cityDateObject.toLocaleTimeString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const formattedDate = cityDateObject.toLocaleDateString("uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const rawDay = cityDateObject.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const formattedDay = rawDay.charAt(0).toUpperCase() + rawDay.slice(1);

    return {
      id: data.id,
      name: data.name,
      country: data.sys.country,
      time: formattedTime,
      date: formattedDate,
      day: formattedDay,
      temp: Math.round(data.main.temp),
      condition: data.weather[0].main,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      wind: data.wind.speed,
    };
  };

  return (
    <>
      <Header onToggle={handleToggleModal} username={username} />

      {open && <Modal onToggle={handleToggleModal} setUsername={setUsername} />}

      <Hero city={handleHeroSearch} />

      {/* Якщо міст немає, показуємо повідомлення, інакше — список */}
      <main style={{ padding: "0 20px", maxWidth: "1200px", margin: "0 auto" }}>
        {cities.length === 0 ? (
          <p style={{ textAlign: "center", margin: "40px 0", color: "#666" }}>
            Список порожній. Додайте місто через пошук вище ☝️
          </p>
        ) : (
          <CardList
            cities={cities}
            onRefresh={handleRefreshCity}
            onDelete={handleDeleteCity}
            onSelect={(city) => setSelectedCity(city)}
          />
        )}
      </main>
    </>
  );
}

export default App;