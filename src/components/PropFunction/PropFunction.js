import React from 'react'

export default class PassedInFunction extends React.Component{
    render() {
        return(
            <> 
                <h1>Function from Props!</h1>
                <button data-testid="prop-button" onClick={() => this.props.propFunction('Hello RTL!')}>This button calls a function from props</button>
            </>
        )
    }
}