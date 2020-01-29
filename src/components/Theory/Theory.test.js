import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Theory from './Theory'

test('button changes text when clicked for the first time', () => {
    // Arrange
    const theoryComponent = render(<Theory />)
    const theButton = theoryComponent.getByTestId('the-button')

    // Act
    fireEvent.click(theButton)

    // Assert
    expect(theButton.textContent).toEqual('This Button Has Definitely Been Clicked')
})

test('button text does not change when clicked for the after the first time', () => {
    // Arrange
    render(<Theory />)
    const theButton = screen.getByTestId('the-button')

    // Act
    fireEvent.click(theButton)
    fireEvent.click(theButton)

    // Assert
    expect(theButton.textContent).toEqual('This Button Has Definitely Been Clicked')
})
