import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Offers from '../Offers'; // Assuming this is the path to your Offers component

// Mock Firebase Firestore
jest.mock('../firbase', () => ({
  db: {
    collection: jest.fn(() => ({
      where: jest.fn(() => ({
        orderBy: jest.fn(() => ({
          getDocs: jest.fn(() => ({
            forEach: jest.fn(),
          })),
        })),
      })),
    })),
  },
}));

describe('Offers Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mock function calls before each test
  });

  test('renders loading spinner initially', () => {
    const { getByTestId } = render(<Offers />);
    expect(getByTestId('spinner')).toBeInTheDocument();
  });

  test('fetches and displays vegitables products', async () => {
    const mockVegProducts = [
      { id: '1', data: { name: 'Tomato', price: 1.99 } },
      { id: '2', data: { name: 'Potato', price: 0.99 } },
    ];

    jest.spyOn(React, 'useState').mockImplementation((initialValue) => [initialValue, jest.fn()]);

    jest.spyOn(React, 'useEffect').mockImplementationOnce((callback) => callback()); // Simulate useEffect call

    jest.spyOn(React, 'useState').mockReturnValueOnce([mockVegProducts, jest.fn()]); // Mock useState for vegProducts

    const { getByText } = render(<Offers />);
    await waitFor(() => {
      expect(getByText('Tomato')).toBeInTheDocument();
      expect(getByText('Potato')).toBeInTheDocument();
    });
  });

  
});
