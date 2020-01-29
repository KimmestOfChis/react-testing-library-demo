import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Arithmetic from "./Arithmetic";

test("performs addition", () => {
  // Arrange
  render(<Arithmetic />);
  const firstNumber = screen.getByTestId("firstNumber");
  const secondNumber = screen.getByTestId("secondNumber");
  const mathResult = screen.getByTestId("math-result");

  // Act
  fireEvent.change(firstNumber, { target: { value: "10" } });
  fireEvent.change(secondNumber, { target: { value: "10" } });

  // Assert
  expect(mathResult.textContent).toBe("20");
});

test("performs subtraction", () => {
  // Arrange
  render(<Arithmetic />);
  const firstNumber = screen.getByTestId("firstNumber");
  const secondNumber = screen.getByTestId("secondNumber");
  const mathResult = screen.getByTestId("math-result");
  const subtractionButton = screen.getByTestId("Subtraction");

  // Act
  fireEvent.change(firstNumber, { target: { value: "14" } });
  fireEvent.change(secondNumber, { target: { value: "10" } });
  fireEvent.click(subtractionButton);

  // Assert
  expect(mathResult.textContent).toBe("4");
});

test("performs multiplication", () => {
  // Arrange
  render(<Arithmetic />);
  const firstNumber = screen.getByTestId("firstNumber");
  const secondNumber = screen.getByTestId("secondNumber");
  const mathResult = screen.getByTestId("math-result");
  const multiplyButton = screen.getByTestId("Multiplication");

  // Act
  fireEvent.change(firstNumber, { target: { value: "100" } });
  fireEvent.change(secondNumber, { target: { value: "5" } });
  fireEvent.click(multiplyButton);

  // Assert
  expect(mathResult.textContent).toBe("500");
});

test("performs division", () => {
  // Arrange
  render(<Arithmetic />);
  const firstNumber = screen.getByTestId("firstNumber");
  const secondNumber = screen.getByTestId("secondNumber");
  const mathResult = screen.getByTestId("math-result");
  const divisionButton = screen.getByTestId("Division");

  // Act
  fireEvent.change(firstNumber, { target: { value: "100" } });
  fireEvent.change(secondNumber, { target: { value: "5" } });
  fireEvent.click(divisionButton);

  // Assert
  expect(mathResult.textContent).toBe("20");
});

// test("onChange is called", () => {
//   render(<Arithmetic />);
//   const onChangeMock = jest.fn();
//   const firstNumber = screen.getByTestId("firstNumber");
//   const mathResult = screen.getByTestId("math-result");
//   firstNumber.onChange = onChangeMock;

//   fireEvent.change(firstNumber, { target: { value: "100" } });
//   expect(firstNumber.value).toBe("100");
//   expect(mathResult.textContent).toBe("100");
//   expect(onChangeMock).toHaveBeenCalled();
// });
