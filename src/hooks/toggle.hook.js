import { useState, useEffect } from 'react';
export function useTimer(timerSec = 1000) {
    const [toggle, setToggle] = useState(false);
    useEffect(() => {
        const intervalID = setInterval(() => {
            setToggle(!toggle);
        },timerSec);
        return () => {
            clearInterval(intervalID);
        }
    },[toggle, timerSec]);
    return toggle;
}