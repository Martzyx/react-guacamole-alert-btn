import React, { useState } from "react";
import Alert from "./Alert";

interface Props {
    color?: "primary" | "secondary" | "danger";
    onClick: () => void;
    children: React.ReactNode;
}

const Button = ({ color = "primary", onClick }: Props) => {
    const [showAlert, setShowAlert] = useState(false);

    const handleClick = () => {
        setShowAlert(true);
        if (onClick) {
            onClick(); // Call onClick if it is provided
        }
    };

    return (
        <div>
            {showAlert && <Alert children="Okayyy"></Alert>}
            <button className={`btn btn-${color}`} onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
};

export default Button;
