import React, { Component } from 'react'
import Project from './project';
import { connect } from 'react-redux';

class Projects extends Component {
    state = {
        projects: null
    }
    render() {
        console.log(this.props);
        if(!this.state.projects) return null;
        return (
            <div className="projects">
                {
                    this.state.projects.map((project) => {
                        return <Project project={project} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    test: state.penis
})

export default connect(mapStateToProps)(Projects)