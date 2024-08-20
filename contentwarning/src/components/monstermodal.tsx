import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface MonsterModalProps {
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

const MonsterModal = ({ onClose, children, title }: MonsterModalProps) => {
    const handleCloseClick = () => {
        onClose();
    };

    const modalContent = (
        <div className="modal-overlay fixed inset-0 bg-noir bg-opacity-50 flex justify-center items-center ">
        <div className="modal-wrapper bg-minty p-4 rounded-lg shadow-lg mx-5 my-10 w-screen h-[800px] md:h-[900px] text-wrap overflow-y-auto ">
        <div className="modal-header fixed right-7">
        <button
        onClick={handleCloseClick}
        className="text-lg font-bold  my-4 px-7 py-1 rotate-[45deg]  bg-minty  text-noir rounded-full shadow-lg "
        aria-label="Close Modal"
        >
        <p>
         ×
        </p>
        </button>
        </div>
                {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
                <div className="text-[40px]">{children}</div>
            </div>
        </div>
    );
    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root") as HTMLElement
    );
};

export default MonsterModal;

// md 10 14 3
// sm 5 7 1