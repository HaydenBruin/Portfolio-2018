import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom';

export default class ProjectDetail extends Component {
    render() {
        return (
            <Fragment>
                <Link to="/" className="projects__project">Back</Link>
                <h1>project: {this.props.match.params.project}</h1>
            </Fragment>
        )
    }
}
