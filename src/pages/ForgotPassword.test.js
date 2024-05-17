import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ForgotPassword from '../path/to/ForgotPassword'; // Update the path accordingly

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(), // Mock the useNavigate hook
}));

jest.mock('firebase/auth', () => ({
  __esModule: true,
  getAuth: jest.fn().mockReturnValue({
    sendPasswordResetEmail: jest.fn().mockResolvedValue(),
  }), // Mock the getAuth method and its sendPasswordResetEmail function
}));

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  }, // Mock the toast functions
}));

describe('ForgotPassword component', () => {
  test('submits password reset request successfully', async () => {
    const { getByPlaceholderText, getByText } = render(<ForgotPassword />);
    
    // Fill in the email input
    fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'test@example.com' } });
    
    // Submit the form
    fireEvent.submit(getByText('send reset email'));
    
    // Wait for the password reset request to be sent
    await waitFor(() => expect(getAuth().sendPasswordResetEmail).toHaveBeenCalledWith(expect.anything(), 'test@example.com'));
    
    // Assert that success message is shown
    expect(toast.success).toHaveBeenCalledWith('Password reset email sent successfully!');
    
    // Assert that the user is navigated to the sign-in page
    expect(useNavigate).toHaveBeenCalledWith('/sign-in');
  });

  test('handles password reset request failure', async () => {
    // Mocking a rejected password reset request
    getAuth().sendPasswordResetEmail.mockRejectedValueOnce(new Error('Password reset failed'));
    
    const { getByPlaceholderText, getByText } = render(<ForgotPassword />);
    
    // Fill in the email input
    fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'test@example.com' } });
    
    // Submit the form
    fireEvent.submit(getByText('send reset email'));
    
    // Wait for the error to be displayed
    await waitFor(() => expect(toast.error).toHaveBeenCalledWith('Something went wrong in the password reset process.'));
  });
});
