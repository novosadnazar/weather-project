import { useState } from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Hero from "./components/Hero/Hero";

function App() {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

  const handleToggleModal = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>

      <Header onToggle={handleToggleModal} username={username} />

    
      {open && <Modal onToggle={handleToggleModal} setUsername={setUsername} />}

      <Hero />
    </>
  );
}

export default App;
