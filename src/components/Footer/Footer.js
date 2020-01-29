import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {this.props.selectedSlide === 0 ? (
            <></>
          ) : (
            <button data-testid="decrement" onClick={this.props.decrement}>Go Back</button>
          )}
          {this.props.selectedSlide === this.props.totalSlides - 1 ? (
            <></>
          ) : (
            <button data-testid="increment" onClick={this.props.increment}>Next</button>
          )}
        </footer>
      </div>
    );
  }
}
