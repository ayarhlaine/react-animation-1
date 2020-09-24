import React from 'react'
import Background from '../../Background/Background'
import { animated, useSpring } from 'react-spring';
import { useTimer } from '../../hooks/toggle.hook';
import './NumberCounter.css';
function NumberCounter() {
    const toggle = useTimer();
    const props = useSpring({ number: toggle ? 1 : 0, from: { number: toggle ? 0 : 1 } })
    return (
        <div className="NumberCounter">
            <Background>
            <animated.div className="NumberCounter__value">
                {props.number.interpolate((number) => `${parseInt(number.toFixed(2) * 100)} Students`)}</animated.div>
            </Background>
        </div>
    )
}

export default NumberCounter
