import React, {useRef, useState} from 'react'
import { animated, useSpring, useTransition, useChain, config} from 'react-spring';
import './Chooser.css';
const data = [
    {
        name: 'Apple',
        css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        height: 200,
    },
    {
        name: 'Orange',
        css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        height: 200,
    },
    {
        name: 'Banana',
        css: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        height: 200,
    }
];
function Chooser() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState('');
    const springRef = useRef();
    const transRef = useRef();
    const {size, background, display}= useSpring({
        ref: springRef,
        config: config.stiff,
        from: { size: '30%', background: 'mediumvioletred', display: 'flex'},
        to: { size: open ? '100%' : '30%', background: open ? 'white' : 'mediumvioletred', display: open ? 'none' : 'flex' }
    })

    const transitions = useTransition(open ? data : [], item => item.name, {
        ref: transRef,
        unique: true,
        trail: 50 / data.length,
        from: { opacity: 0, transform: 'scale(0)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0)' }
    })
    useChain(open ? [springRef, transRef] : [transRef, springRef], [0, open ? 0.1 : 0.6] )
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <div className="Chooser">
            <div className="Chooser__selectedItem">
                <h3>Selected Item : { !open && selected}</h3>
            </div>
            <animated.div className="Container" style={{
                width: size,
                height: size,
                background: background,
                // ...rest,
            }} onClick={handleClick}>
                <animated.div style={{
                    display: display,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <h2><span role="img" aria-label="Point">👉</span> Fruits</h2>
                </animated.div>
                {transitions.map(({ item, key, props }) => (
                    <div className='Item' key={key} style={{ ...props, background: item.css, height: item.height }} onClick={() => setSelected(item.name)} >
                        {item.name}
                    </div>
                ))}
            </animated.div>
        </div>
    )
}

export default Chooser
