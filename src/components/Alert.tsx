import { useState } from "react";

interface Props {
    children: string;
    onClick?: () => void;
    onClose?: () => void;
}

const Alert = ({ children, onClose }: Props) => {
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        if (onClose) {
            onClose(); // Call onClose if it is provided
        }
    };

    if (!show) {
        return null; // Don't render the Alert if show is false
    }

    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> {children}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={handleClose}></button>
        </div>
    );
};

export default Alert;
