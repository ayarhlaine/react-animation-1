import React, { useState, useEffect} from 'react'
import { animated, useSpring } from 'react-spring';
import Background from '../../Background/Background';
import { useTimer } from '../../hooks/toggle.hook';
import './WaterTank.css';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function WaterTank() {
    const toggle = useTimer(2000);
    const [current, setCurrent] = useState(0);
    const [next, setNext] = useState(0);

    useEffect(() => {
        setCurrent(next);
        setNext(getRandomArbitrary(0, 100));
    },[toggle]);

    const { number } = useSpring({ number: next, from: { number: current }, duration: 9000 })
    const percentage = (number) => `${number.toFixed(0)}%`;
    const getValue = (number) => `${number.toFixed(0)}%`;
    return (
        <Background >
        <animated.div className="WaterTank">
            <animated.div
            className={`Tank ${next.toFixed(0) >= 50 ? 'Tank__Normal' : 'Tank__Critical'}`}
            style={{
                height: number.interpolate((number) => percentage(number))
            }}
            >
            </animated.div>
            <span className="Tank__Value">{next.toFixed(0)} ℓ</span>
        </animated.div>
        </Background>
    )
}

export default WaterTank
