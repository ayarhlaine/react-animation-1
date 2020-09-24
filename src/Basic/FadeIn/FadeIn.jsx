import React from 'react';
import {useSpring, animated} from 'react-spring'
import Background from '../../Background/Background';
import { useTimer } from '../../hooks/toggle.hook';

function FadeIn() {
    const toggle = useTimer(2000);
    const props = useSpring({opacity: toggle ? 0 :1, from: {opacity: toggle ? 1 : 0}})
    return (
        <Background >
            <animated.div style={props}>I will fade in / out</animated.div>
        </Background>
    )
}

export default FadeIn
