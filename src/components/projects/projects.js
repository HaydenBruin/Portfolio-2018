import React, { Component } from 'react'
import Project from './project';
import { connect } from 'react-redux';

class Projects extends Component {
    render() {
        if(!this.props.projects) return null;
        return (
            <div className="projects">
                {
                    this.props.projects.map((project, index) => {
                        return <Project key={index} project={project} />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    projects: state.projects
})

export default connect(mapStateToProps)(Projects)