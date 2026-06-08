import { useState } from "react";
import style from "./Modal.module.css";
import { createPortal } from "react-dom";
const rootModal = document.querySelector("#root-modal")

const Modal = ({onToggle}) => {
    const [isModalOpen, setIsModalOpen]= useState(false)



    return createPortal(
      <div className={style.backdrop}>
        <div className={style.modal}>
          <h2 className={style.modalTitle}>Sign up</h2>
          <form>
            <label className={style.modalLabel}>
              Username
              <input
                type="text"
                placeholder="Username"
                className={style.modalInput}
              />
            </label>
            <label className={style.modalLabel}>
              E-Mail
              <input
                type="text"
                placeholder="E-Mail"
                className={style.modalInput}
              />
            </label>
            <label className={style.modalLabel}>
              Password
              <input
                type="Password"
                placeholder="Password"
                className={style.modalInput}
              />
            </label>
            <button type="submit" className={style.modalBtn} onClick={onToggle}>
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
}

export default Modal