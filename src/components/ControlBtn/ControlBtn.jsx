import React, { useState, useEffect } from 'react';
//Styles
import './ControlBtn.scss';

export const ControlBtn = ({label, icon, iconEnabled, reversed, callback}) => {

    const [enabled, setEnabled] = useState(false);
    const [background, setBackground] = useState(icon);

    const styles = {
        backgroundImage: `url(${background})`
    }

    //Dynamic icon change
    useEffect(() => {
        if (enabled && iconEnabled) {
            setBackground(iconEnabled)
        } else {
            setBackground(icon)
        }
    }, [enabled, icon, iconEnabled])

    //onClick callback
    const toggleClick = () => {
        setEnabled(!enabled);

        if (callback) {
            callback();
        }
    }

    return (
        <>
            <button className={`control-button ${reversed ? 'reversed' : ''}`} style={styles} onClick={toggleClick}>
                {label}
            </button>
        </>
    )
}
