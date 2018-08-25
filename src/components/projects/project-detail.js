import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProjectDetail extends Component {

    project = this.props.projects.find(proj => {
        return proj.slug === this.props.match.params.project;
    })

    render() {
        return (
            <Fragment>
                <Link to="/" className="projects__project">Back</Link>
                <div className="projects__project">
                    <div className="projects__project--imgwrapper">
                        <img src={this.project.media} alt={this.project.title} />
                    </div>
                    <div className="projects__project--content">
                        <div className="date">{this.project.date}</div>
                        <div className="dash"></div>
                        <div className="title">{this.project.title}</div>
                        <div className="role">{this.project.role}</div>
                        <div className="tags">
                            {
                                this.project.tags.map((tag, index) => {
                                    return <div key={index} className={"tag " + tag.toLowerCase()}>{tag}</div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    projects: state.projects
})

export default connect(mapStateToProps)(ProjectDetail)