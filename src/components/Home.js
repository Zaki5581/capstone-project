import {Link} from 'react-router-dom';

import StyledHome from '../style/StyledHome';

export default function Home() {
  return (
    <StyledHome>
      <Link className="link1" to="/">
        Home
      </Link>
    </StyledHome>
  );
}
