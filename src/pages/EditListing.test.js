import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import EditListing from '../path/to/EditListing'; // Update the path accordingly

jest.mock('../path/to/firebase', () => ({
  __esModule: true,
  db: {
    updateDoc: jest.fn().mockResolvedValue({ id: '1234567890' }), // Mock the updateDoc method of Firestore
    getDoc: jest.fn().mockResolvedValue({
      data: jest.fn().mockReturnValue({
        title: 'Test Title',
        description: 'Test Description',
        price: 10,
        discountPrice: 5,
        category: 'Vegetables',
        offer: true,
        image: null,
      }),
    }), // Mock the getDoc method of Firestore
  },
}));

const mockNavigate = jest.fn(); // Mock the navigate function

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: '1234567890' }), // Mock the useParams hook to return the desired product ID
  useNavigate: () => mockNavigate, // Mock the useNavigate hook
}));

describe('EditListing component', () => {
  test('renders form with existing product data and handles input changes correctly', async () => {
    const { getByLabelText, getByPlaceholderText } = render(<EditListing />);
    
    // Wait for product data to be loaded
    await waitFor(() => expect(getByLabelText('Title')).toHaveValue('Test Title'));
    
    // Change input values
    fireEvent.change(getByLabelText('Title'), { target: { value: 'Updated Title' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: 'Updated Description' } });
    fireEvent.change(getByLabelText('Price(LKR)'), { target: { value: '20' } });
    fireEvent.click(getByLabelText('Offer')); // Click 'Yes' for offer
    fireEvent.change(getByLabelText('Discounted Price(LKR)'), { target: { value: '15' } });
    fireEvent.change(getByLabelText('Category'), { target: { value: 'Meats' } });
    
    // Submit the form
    fireEvent.click(getByPlaceholderText('Edit Listing'));
    
    // Wait for the loading spinner to disappear (assuming it disappears when loading is finished)
    await waitFor(() => expect(queryByTestId('spinner')).not.toBeInTheDocument());
    
    // Assert that the listing was edited successfully
    expect(mockNavigate).toHaveBeenCalledWith('/category/Meats/1234567890');
  });
});
