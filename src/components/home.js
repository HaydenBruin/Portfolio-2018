import React, { Fragment, Component } from 'react';

import Hero from './hero';
import Footer from './footer';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Hero />
                <Footer />
            </Fragment>
        );
    }
}

export default Home