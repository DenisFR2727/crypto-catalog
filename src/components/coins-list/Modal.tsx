import { createPortal } from 'react-dom';
import './coins-list.css';

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

function Modal({ children, onClose }: ModalProps) {
    const modalRoot = document.getElementById('overlays');

    if (!modalRoot) return null;

    return createPortal(
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>,
        modalRoot
    );
}

export default Modal;
