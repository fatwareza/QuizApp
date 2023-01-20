import React from "react";
import { useGlobalContext } from "./context";


const Modal = () => {
    const { isModalOpen, closeModal, correct, quiz } = useGlobalContext();
    return (
        <div
            className={`${isModalOpen ? "modal-container isOpen" : "modal-container"
                }`}
        >
            <div className="modal-content">
                <h2>Selamat!!!</h2>
                <p>Anda berhasil menjawab {(correct).toFixed(0)} dari {quiz.amount} soal
                </p>
                <button className="close-btn" onClick={closeModal}>
                    Mulai Lagi
                </button>
            </div>
        </div>
    );
};


export default Modal;