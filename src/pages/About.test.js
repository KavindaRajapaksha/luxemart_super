import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

describe('About component', () => {
  test('renders component with correct content', () => {
    const { getByText, getByAltText } = render(<About />);
    
    // Check if the headings are rendered correctly
    expect(getByText('The Future of Retail')).toBeInTheDocument();
    expect(getByText('100% Trusted Organic Food Store')).toBeInTheDocument();
    expect(getByText('We Deliver, You Enjoy Your Order')).toBeInTheDocument();
    
    // Check if the images are rendered correctly
    expect(getByAltText('AboutImage1')).toBeInTheDocument();
    expect(getByAltText('AboutImage2')).toBeInTheDocument();
    expect(getByAltText('AboutImage3')).toBeInTheDocument();
    
    // Check if some specific text content is rendered correctly
    expect(getByText('LuxeMART aims to revolutionize the supermarket experience')).toBeInTheDocument();
    expect(getByText('Welcome to our 100% Trusted Organic Food Store')).toBeInTheDocument();
    expect(getByText('At our "We Deliver, You Enjoy Your Order" service')).toBeInTheDocument();
  });
});
