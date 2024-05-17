import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Profile from './Profile';
describe('Profile Component', () => {
    test('should render user name and email inputs', () => {
      render(<Profile />);
      expect(screen.getByLabelText('User Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });
  
    test('should display user name input in edit mode when clicked', () => {
      render(<Profile />);
      fireEvent.click(screen.getByText('Edit'));
      expect(screen.getByLabelText('User Name')).toBeDisabled();
    });
  
    
  });
  