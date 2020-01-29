import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PassedInFunction from "./PropFunction";



test('button changes text when clicked for the first time', () => {
    // Arrange
    const mockedPropFunction = jest.fn()
    render(<PassedInFunction propFunction={mockedPropFunction} />)
    const propFunctionButton = screen.getByTestId('prop-button')

    // Act
    fireEvent.click(propFunctionButton)

    // Assert
    expect(mockedPropFunction).toHaveBeenCalledTimes(1)
    expect(mockedPropFunction).toHaveBeenCalledWith('Hello RTL!')
})