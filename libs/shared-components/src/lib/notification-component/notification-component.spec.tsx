import { Notification } from '@mel-services-logistiques/models';
import { render } from '@testing-library/react-native';
import React from 'react';
import NotificationComponent from './notification-component';

describe('Notification', () => {
  const notifications: Notification[] = [];
  it('should render successfully', () => {
    const { container } = render(<NotificationComponent notifications={notifications} />);
    expect(container).toBeTruthy();
  });
});
