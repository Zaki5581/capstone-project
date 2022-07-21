import {motion} from 'framer-motion';
import {useState} from 'react';

import ch from '../images/icons8-chicken-32.png';
import rs from '../images/icons8-reisschüssel-64.png';
import rk from '../images/rak.png';
import StyledNavigation from '../style/StyledNavigation';

export default function Navigation() {
  const [expand, setExpand] = useState(false);

  return (
    <StyledNavigation>
      <h3>&#8593; Start &#8593;</h3>
      <button>
        <ion-icon
          name="barbell-outline"
          onClick={() => {
            setExpand(expand => !expand);
          }}
        ></ion-icon>
      </button>
      {expand && (
        <>
          <motion.a
            className="link"
            animate={{
              x: -50,
              y: 80,
              opacity: 1,
              rotate: 360,
            }}
            initial={{
              opacity: 0.1,
            }}
            transition={{
              type: 'spring',
              duration: 1,
            }}
            href="/main"
          >
            <img src={rk} alt="rack" />
          </motion.a>
          <motion.a
            className="link"
            animate={{
              x: 50,
              y: 80,
              opacity: 1,
              rotate: -360,
            }}
            initial={{
              opacity: 0.1,
            }}
            transition={{
              type: 'spring',
              duration: 1,
            }}
            href="/nutrition"
          >
            <img src={rs} alt="rack" />
            <img src={ch} alt="rack" />
          </motion.a>
        </>
      )}
    </StyledNavigation>
  );
}
