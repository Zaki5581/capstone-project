import {render} from '@testing-library/react';

import Main from './Main';
import Navigation from './Navigation';
import Nutrition from './Nutrition';

test('renders the Main component', () => {
  render(<Main />);
});

test('renders the Navigation component', () => {
  render(<Navigation />);
});

test('renders the Nutrition component', () => {
  render(<Nutrition />);
});
