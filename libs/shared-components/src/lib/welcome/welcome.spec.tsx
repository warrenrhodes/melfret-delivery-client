import React from 'react';
import { render } from '@testing-library/react-native';

import Welcome from './welcome';

describe('Welcome', () => {
  it('should render successfully', () => {
    const { container } = render(<Welcome />);
    expect(container).toBeTruthy();
  });
});
