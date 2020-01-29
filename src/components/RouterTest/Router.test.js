import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import RouterTest from './RouterTest'

test('clicking go to part 2 shows you part 2', () => {
    // Arrange
    render(<RouterTest />)
    const link = screen.getByText('Go to part 2')

    // Act 
    fireEvent.click(link)

    // Assert
    expect(screen.getByText('Welcome to Part 2!')).toBeInTheDocument();
})