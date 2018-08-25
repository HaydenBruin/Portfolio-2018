import React, { Fragment, Component } from 'react';

import Hero from './hero';
import Projects from './projects/projects';
import Footer from './footer';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Hero />
                <Projects />
                <Footer />
            </Fragment>
        );
    }
}

export default Home