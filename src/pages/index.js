
import React, { Component } from 'react';

import { Provider } from 'react-redux';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { connect } from 'react-redux';

import WorkshopsPage from './workshops';

class Index extends Component {

    state = {};

    async componentDidMount() {

    }

    render() {

        return (
            <Router>
                <div>
                    <nav id="sidebar">
                        <ul>
                            <li>
                                <Link to="/">Workshops Stat</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path="/">
                            <WorkshopsPage/>
                        </Route>
                    </Switch>

                </div>
            </Router> );

    }

}


const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);