import React from "react";

export default class ExternalAPIs extends React.Component {
  state = {
    firstNumber: 0,
    secondNumber: 0,
    operation: "Addition"
  };

  handleChange = e => {
    if(e.target.value !== 0) {
        this.setState({ [e.target.name]: parseFloat(e.target.value) });
    } else {
        this.setState({ [e.target.name]: 0 });
    }
  };

  setOperation = operation => {
    this.setState({ operation: operation });
  };

  performOperation = () => {
    return this.operations[this.state.operation](this.state.firstNumber, this.state.secondNumber)
  }

  operations = {
      'Addition': function(a, b) { return a + b },
      'Subtraction': function(a, b) { return a - b },
      'Multiplication': function(a, b) { return a * b },
      'Division': function(a, b) { return a / b },
  }

  render() {
    return (
      <>
        <div className="inline">
          <button data-testid="Addition" onClick={() => this.setOperation("Addition")}>Add</button>
          <button data-testid="Subtraction" onClick={() => this.setOperation("Subtraction")}>
            Subtract
          </button>
          <button data-testid="Multiplication" onClick={() => this.setOperation("Multiplication")}>
            Multiply
          </button>
          <button data-testid="Division" onClick={() => this.setOperation("Division")}>Divide</button>
        </div>
        <input
          type="number"
          data-testid="firstNumber"
          name="firstNumber"
          value={this.state.firstNumber}
          onChange={this.handleChange}
        />
        <input
          type="number"
          data-testid="secondNumber"
          name="secondNumber"
          value={this.state.secondNumber}
          onChange={this.handleChange}
        />

        <h4 data-testid="math-result">{this.performOperation()}</h4>
      </>
    );
  }
}
