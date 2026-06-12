import { useState, useEffect } from "react";
import style from "./Modal.module.css";
import { createPortal } from "react-dom";

const rootModal = document.querySelector("#root-modal");

const Modal = ({ onToggle, setUsername }) => {
  const [userNameInput, setUserNameInput] = useState("");

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onToggle();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onToggle]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onToggle();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userNameInput.trim() !== "") {
      setUsername(userNameInput);
      onToggle();
    }
  };

  return createPortal(
    <div className={style.backdrop} onClick={handleBackdropClick}>
      <div className={style.modal}>
        <h2 className={style.modalTitle}>Sign up</h2>

        <form onSubmit={handleSubmit}>
          <label className={style.modalLabel}>
            Username
            <input
              type="text"
              placeholder="Username"
              className={style.modalInput}
              value={userNameInput}
              onChange={(e) => setUserNameInput(e.target.value)}
              required
            />
          </label>
          <label className={style.modalLabel}>
            E-Mail
            <input
              type="email"
              placeholder="E-Mail"
              className={style.modalInput}
              required
            />
          </label>
          <label className={style.modalLabel}>
            Password
            <input
              type="password"
              placeholder="Password"
              className={style.modalInput}
              required
            />
          </label>

          <button type="submit" className={style.modalBtn}>
            Sign up
          </button>
        </form>

        <p className={style.modalText}>
          Already have an account? <a href="#">Log In</a>
        </p>
      </div>
    </div>,
    rootModal
  );
};

export default Modal;
