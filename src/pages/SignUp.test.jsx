import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignUp from '../path/to/SignUp'; // Update the path accordingly

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(), // Mock the useNavigate hook
}));

jest.mock('firebase/auth', () => ({
  __esModule: true,
  getAuth: jest.fn().mockReturnValue({
    createUserWithEmailAndPassword: jest.fn().mockResolvedValue({
      user: { uid: 'testUid' },
    }),
    updateProfile: jest.fn().mockResolvedValue(),
  }), // Mock the getAuth method and its createUserWithEmailAndPassword and updateProfile functions
}));

jest.mock('firebase/firestore', () => ({
  __esModule: true,
  doc: jest.fn().mockReturnValue({
    set: jest.fn().mockResolvedValue(),
  }), // Mock the doc function
}));

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  }, // Mock the toast functions
}));

describe('SignUp component', () => {
  test('submits sign up request successfully', async () => {
    const { getByPlaceholderText, getByText } = render(<SignUp />);
    
    // Fill in the inputs
    fireEvent.change(getByPlaceholderText('User name'), { target: { value: 'Test User' } });
    fireEvent.change(getByPlaceholderText('Mobile number'), { target: { value: '1234567890' } });
    fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByPlaceholderText('password'), { target: { value: 'testPassword' } });
    
    // Submit the form
    fireEvent.submit(getByText('Sign up'));
    
    // Wait for the sign up request to be sent
    await waitFor(() => expect(getAuth().createUserWithEmailAndPassword).toHaveBeenCalledWith(expect.anything(), 'test@example.com', 'testPassword'));
    await waitFor(() => expect(getAuth().updateProfile).toHaveBeenCalledWith(expect.anything(), {
      displayName: 'Test User',
    }));
    
    // Assert that success message is shown
    expect(toast.success).toHaveBeenCalledWith('Sign up successful!');
    
    // Assert that the user is navigated to the home page
    expect(useNavigate).toHaveBeenCalledWith('/');
  });

  test('handles sign up request failure', async () => {
    // Mocking a rejected sign up request
    getAuth().createUserWithEmailAndPassword.mockRejectedValueOnce(new Error('Sign up failed'));
    
    const { getByPlaceholderText, getByText } = render(<SignUp />);
    
    // Fill in the inputs
    fireEvent.change(getByPlaceholderText('User name'), { target: { value: 'Test User' } });
    fireEvent.change(getByPlaceholderText('Mobile number'), { target: { value: '1234567890' } });
    fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByPlaceholderText('password'), { target: { value: 'testPassword' } });
    
    // Submit the form
    fireEvent.submit(getByText('Sign up'));
    
    // Wait for the error to be displayed
    await waitFor(() => expect(toast.error).toHaveBeenCalledWith('Something went wrong in the sign up process. Please try again.'));
  });
});
