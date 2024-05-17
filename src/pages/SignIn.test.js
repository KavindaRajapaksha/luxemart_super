import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignIn from './SignIn';

describe('SignIn Component', () => {
    test('should render email and password inputs', () => {
      const { getByPlaceholderText } = render(<SignIn />);
      expect(getByPlaceholderText('Email address')).toBeInTheDocument();
      expect(getByPlaceholderText('password')).toBeInTheDocument();
    });
  
    test('should show password when eye icon is clicked', () => {
      const { getByLabelText } = render(<SignIn />);
      const eyeIcon = getByLabelText('Toggle password visibility');
      fireEvent.click(eyeIcon);
      expect(getByLabelText('password')).toHaveAttribute('type', 'text');
    });
  
  });
  