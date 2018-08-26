import React, { Fragment, Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './homepage';
import ProjectDetail from './projects/project-detail';
import Footer from './footer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/projects/:project" component={ProjectDetail} />
                </Switch>
                <Footer />
            </Fragment>
        );
    }
}

export default App