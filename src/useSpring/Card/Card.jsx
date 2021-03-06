import React from 'react'
import { useSpring, animated } from 'react-spring'
import './Card.css';
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
function Card() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const imageURL = process.env.PUBLIC_URL+"/images/myimage.jpg";
    return (
        <div className='Card'>
            <animated.div
            class="Card__card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ 
                transform: props.xys.interpolate(trans),
                backgroundImage: `url(${imageURL})`,
            }}
            />
        </div>
    )
}

export default Card
