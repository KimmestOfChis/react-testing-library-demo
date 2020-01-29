import React from "react";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Theory from "./components/Theory/Theory";
import TestingWithProps from "./components/TestingWithProps/TestingWithProps";
import Arithmetic from "./components/Arithmetic/Arithmetic";
import RouterTest from "./components/RouterTest/RouterTest";
import PropFunction from "./components/PropFunction/PropFunction";
import Footer from "./components/Footer/Footer";

const propFunction = message => {
  console.log(message);
};

const slides = [
  <Landing />,
  <Theory />,
  <TestingWithProps message={"Now we're going to test stuff with props!"} />,
  <Arithmetic />,
  <PropFunction propFunction={propFunction} />,
  <RouterTest />
];
export default class App extends React.Component {
  state = {
    selectedSlide: 0
  };

  increment = () => {
    this.setState({ selectedSlide: this.state.selectedSlide + 1 });
  };

  decrement = () => {
    this.setState({ selectedSlide: this.state.selectedSlide - 1 });
  };

  renderSlide = () => {
    return slides[this.state.selectedSlide];
  };

  render() {
    return (
      <>
        <header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1>React Testing Library</h1>
        </header>
        <div className="App">{this.renderSlide()}</div>
        <br />
        {/* <div>
      <footer style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        {this.state.selectedSlide === 0 ? <></> : <button onClick={() => this.decrement()}>Go Back</button> }
        {this.state.selectedSlide === slides.length - 1 ? <></> : <button onClick={() => this.increment()}>Next</button>}
      </footer>
      </div> */}
        <Footer
          increment={this.increment}
          decrement={this.decrement}
          selectedSlide={this.state.selectedSlide}
          totalSlides={slides.length}
        />
      </>
    );
  }
}
