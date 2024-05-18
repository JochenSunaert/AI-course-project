import React from 'react';
import { useSpring, animated } from 'react-spring';
import easterEgg from '../assets/repelsteeltje.png';

function Animation() {
  const [hovered, setHovered] = React.useState(false);

  const { scale } = useSpring({
    scale: hovered ? -1 : 1,
    config: { tension: 120, friction: 14 },
  });

  return (
    <div className="animation-container">
      <animated.div
        className="animation-content"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: 'relative',
          display: 'inline-block',
          transform: scale.interpolate(s => `scaleX(${s})`),
        }}
      >
        <img src={easterEgg} alt="Easter Egg" />
        {hovered && (
          <animated.div
            className="hover-text"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(90deg) scaleX(-1)',
            }}
          >
            <h1>Repelsteeltje</h1>
          </animated.div>
        )}
      </animated.div>
    </div>
  );
}

export default Animation;
