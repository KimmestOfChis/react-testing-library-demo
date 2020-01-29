import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import RouterPart2 from './RouterPart2'


export default class RouterTest extends React.Component {
    render() {
        return(
            <>
                <h1>Testing React Router</h1>
                <Router>
                <Link to="/le-router">Go to part 2</Link>
                <Switch>
                    <Route path="/le-router">
                        <RouterPart2 />
                    </Route>
                </Switch>
                </Router>
            </>
        )
    }
}