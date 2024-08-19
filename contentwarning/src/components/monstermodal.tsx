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
        <div className="modal-overlay fixed inset-0 bg-noir bg-opacity-50 flex justify-center items-center z-50">
            <div className="modal-wrapper bg-minty p-4 rounded-lg shadow-lg w-screen h-[700px]">
                <div className="modal-header flex justify-end">
                    <button
                        onClick={handleCloseClick}
                        className="text-lg font-bold p-2"
                        aria-label="Close Modal"
                        >
                        ×
                        </button>
                </div>
                {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root") as HTMLElement
    );
};
export default MonsterModal;