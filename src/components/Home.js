import {Link} from 'react-router-dom';

import icon2 from '../images/coloredgym.png';
import icon from '../images/icons8-gym-64.png';
import StyledHome from '../style/StyledHome';

export default function Home() {
  return (
    <StyledHome>
      <Link to="/">
        <img src={icon} alt="gym" />
      </Link>
    </StyledHome>
  );
}
