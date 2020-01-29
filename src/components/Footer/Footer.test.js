import React from "react";
import { render, screen, fireEvent, queryByText } from "@testing-library/react";
import Footer from "./Footer";



test('slide goes forward', () => {
    // Arrange
    const mockFunction = jest.fn()
    render(<Footer increment={mockFunction} decrement={mockFunction} selectedSlide={0} totalSlides={2} />)
    const incrementButton = screen.getByTestId('increment')


    // Act
    fireEvent.click(incrementButton)

    // Assert
    expect(mockFunction).toHaveBeenCalledTimes(1)
})

test('go back button is not available on the first slide', () => {
    // Arrange
    const mockFunction = jest.fn()
    render(<Footer increment={mockFunction} decrement={mockFunction} selectedSlide={0} totalSlides={2} />)

    // Assert
    expect(screen.queryByText('Go Back')).not.toBeInTheDocument()
})

test('slide goes back', () => {
    // Arrange
    const mockFunction = jest.fn()
    render(<Footer increment={mockFunction} decrement={mockFunction} selectedSlide={1} totalSlides={2} />)
    const decrementButton = screen.getByTestId('decrement')


    // Act
    fireEvent.click(decrementButton)

    // Assert
    expect(mockFunction).toHaveBeenCalledTimes(1)
})

test('advance button is not available on the first slide', () => {
    // Arrange
    const mockFunction = jest.fn()
    render(<Footer increment={mockFunction} decrement={mockFunction} selectedSlide={1} totalSlides={2} />)

    // Assert
    expect(screen.queryByText('Next')).not.toBeInTheDocument()
})