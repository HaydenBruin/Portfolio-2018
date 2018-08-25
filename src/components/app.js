import React, { Fragment, Component } from 'react';
import { Route } from 'react-router-dom';

import Homepage from './homepage';
import ProjectDetail from './projects/project-detail';
import Footer from './footer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/projects/:project" component={ProjectDetail} />
                <Footer />
            </Fragment>
        );
    }
}

export default App