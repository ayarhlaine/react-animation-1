import { useState, useEffect } from 'react';
export function useTimer(timerSec = 3000) {
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