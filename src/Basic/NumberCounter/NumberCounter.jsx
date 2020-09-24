import React from 'react'
import Background from '../../Background/Background'
import { animated, useSpring } from 'react-spring';
import { useTimer } from '../../hooks/toggle.hook';
import './NumberCounter.css';
function NumberCounter() {
    const toggle = useTimer();
    const props = useSpring({ number: toggle ? 1 : 0, from: { number: toggle ? 0 : 1 }, duration: 3000 })
    return (
        <div className="NumberCounter">
            <Background>
            <div className="NumberCounter__value">
                <animated.span>{props.number.interpolate((number) => `${parseInt(number.toFixed(2) * 100)}`)}</animated.span>
                <span>&#8451;</span>
            </div>
            </Background>
        </div>
    )
}

export default NumberCounter
