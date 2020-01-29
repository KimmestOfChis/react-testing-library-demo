import React from 'react';

export default class Theory extends React.Component {
    state = {
        buttonClicked: false
    }

    changeButtonText = () => {
        if(!this.state.buttonClicked) {
            this.setState({ buttonClicked: !this.state.buttonClicked })
        }
    }

    render() {
      return (
        <>
            <h1>Three Steps for Each Test</h1>
            <h3>1. Arrange - Set up any test data</h3>
            <h3>2. Act - Perform whatever acts you need to on the DOM (check buttons, type stuff, go crazy)</h3>
            <h3>3. Assert - See if the desired behavior has occurred</h3>

            <button data-testid="the-button" onClick={() => this.changeButtonText()}>{this.state.buttonClicked ? "This Button Has Definitely Been Clicked" : "This Button Has Not Been Clicked"}</button>
        </>
      );
    }
  }