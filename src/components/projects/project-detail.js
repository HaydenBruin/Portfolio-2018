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
                {/* <Link to="/" className="projects__project">Back</Link> */}
                <div class="project">
                    <div class="project__project">
                        <div className="project__project--imgwrapper">
                            <img className="real" src={this.project.medialarge} alt={this.project.title} />
                            <img className="blur" src={this.project.medialarge} alt={this.project.title} />
                        </div>
                        <div className="project__project--content container">
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
                </div>
                <div class="description">
                    <div class="container" dangerouslySetInnerHTML={{__html: this.project.description}}></div>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    projects: state.projects
})

export default connect(mapStateToProps)(ProjectDetail)