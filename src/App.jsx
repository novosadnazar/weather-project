import { useState } from 'react';
import './App.css'
import "./index.css"
import Header from './components/Header/Header'
import Modal from './components/Modal/Modal';

function App() {
const [open, setOpen] = useState(false)

      const handleToggleModal = () => {
        setOpen((prev) => !prev.open);
      };
  
  return (
    <>
      <Header onToggle={handleToggleModal} />
      {open && <Modal onToggle={handleToggleModal} />}
    </>
  );
  
}

export default App
