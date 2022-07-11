import {Link} from 'react-router-dom';

import StyledNavigation from '../style/StyledNavigation';

export default function Navigation() {
  return (
    <StyledNavigation>
      <Link className="link" to="/main">
        Training
      </Link>
      <Link className="link" to="/nutrition">
        Nutrition
      </Link>
    </StyledNavigation>
  );
}
