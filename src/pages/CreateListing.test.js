import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CreateListing from '../path/to/CreateListing'; // Update the path accordingly

describe('CreateListing component', () => {
  test('renders form and handles input changes correctly', async () => {
    const { getByLabelText, getByPlaceholderText } = render(<CreateListing />);
    
    // Fill in the form inputs
    fireEvent.change(getByLabelText('Title'), { target: { value: 'Test Title' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: 'Test Description' } });
    fireEvent.change(getByLabelText('Price(LKR)'), { target: { value: '10' } });
    fireEvent.click(getByLabelText('Offer')); // Click 'Yes' for offer
    fireEvent.change(getByLabelText('Discounted Price(LKR)'), { target: { value: '5' } });
    fireEvent.change(getByLabelText('Category'), { target: { value: 'Vegetables' } });
    
    // Upload image (This is mocked as it's difficult to test file uploads)
    const imageInput = getByLabelText('Image');
    Object.defineProperty(imageInput, 'files', {
      value: [new File(['dummy image content'], 'test_image.jpg', { type: 'image/jpeg' })],
    });
    fireEvent.change(imageInput);
    
    // Submit the form
    fireEvent.click(getByPlaceholderText('Create Listing'));
    
    // Wait for the loading spinner to disappear (assuming it disappears when loading is finished)
    await waitFor(() => expect(queryByTestId('spinner')).not.toBeInTheDocument());
    
    // Assert that the listing was created successfully (you may need to adjust this assertion based on how you handle navigation)
    expect(mockNavigate).toHaveBeenCalledWith('/category/Vegetables/1234567890');
  });
});
