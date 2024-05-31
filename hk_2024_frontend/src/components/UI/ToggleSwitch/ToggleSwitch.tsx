import React, { useState } from "react";
import "./ToggleSwitch.css";

interface ToggleSwitchProps {
    onChange: (type: string) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange }) => {
    const [active, setActive] = useState('current');

    const handleToggle = (type: string) => {
        setActive(type);
        onChange(type);
    };

    return (
        <div className="toggle-switch">
            <button
                className={`toggle-button ${active === 'current' ? 'active' : ''}`}
                onClick={() => handleToggle('current')}
            >
                Текущие
            </button>
            <button
                className={`toggle-button ${active === 'past' ? 'active' : ''}`}
                onClick={() => handleToggle('past')}
            >
                Прошлые
            </button>
        </div>
    );
};

export default ToggleSwitch;
