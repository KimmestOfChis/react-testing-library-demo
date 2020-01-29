import React from 'react';

export default class TestingWithProps extends React.Component {
    render() {
      return (
        <>
            <h1>{this.props.message}</h1>
        </>
      );
    }
  }