import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';

import Form from './Form';

test('renders the Form page', () => {
  render(<Form />);
});
