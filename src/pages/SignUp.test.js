import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignUp from './SignUp';

describe('SignUp Component', () => {
  it('renders without crashing', () => {
    render(<SignUp />);
  });

  it('submits the form with valid data', async () => {
    // Mock Firebase functions
    const createUserWithEmailAndPasswordMock = jest.fn(() => Promise.resolve());
    const updateProfileMock = jest.fn(() => Promise.resolve());
    const setDocMock = jest.fn(() => Promise.resolve());
    jest.mock('firebase/auth', () => ({
      getAuth: jest.fn(() => ({ createUserWithEmailAndPassword: createUserWithEmailAndPasswordMock })),
    }));
    jest.mock('firebase/firestore', () => ({
      db: {},
      serverTimestamp: jest.fn(),
      setDoc: setDocMock,
      doc: jest.fn(),
    }));
    // Render component
    const { getByPlaceholderText, getByText } = render(<SignUp />);
    // Fill out the form
    fireEvent.change(getByPlaceholderText('User name'), { target: { value: 'Test User' } });
    fireEvent.change(getByPlaceholderText('Email address'), { target: { value: 'test@example.com' } });
    fireEvent.change(getByPlaceholderText('password'), { target: { value: 'password' } });
    // Submit the form
    fireEvent.click(getByText('Sign up'));
    // Wait for asynchronous actions to complete
    await waitFor(() => expect(createUserWithEmailAndPasswordMock).toHaveBeenCalled());
    await waitFor(() => expect(updateProfileMock).toHaveBeenCalled());
    await waitFor(() => expect(setDocMock).toHaveBeenCalled());
    // Add assertions as needed
  });
});
