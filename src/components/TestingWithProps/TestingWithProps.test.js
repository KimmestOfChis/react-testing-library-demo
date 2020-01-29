import React from 'react'
import { render, screen } from '@testing-library/react'
import TestingWithProps from './TestingWithProps'



test('button changes text when clicked for the first time', () => {
    // Arrange
    const message = "This is a message"
    render(<TestingWithProps message={message} />)

    // Act and Assert
    expect(screen.getByText(message)).toBeInTheDocument();
})