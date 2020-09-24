import React from 'react'
import './Background.css';
function Background({ children }) {
    return (
        <div className="Background">
            {children}
        </div>
    )
}

export default Background
