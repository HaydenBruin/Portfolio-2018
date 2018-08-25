import React, { Component } from 'react'
import Project from './project';

export default class Projects extends Component {

    state = {
        projects: [
            {
                title: "Contact Energy",
                role: "Front-end Developer",
                media: "/media/contact.jpg",
                date: "23rd Aug 2018",
                tags: [
                    "SCSS",
                    "Gulp",
                    "HTML",
                    "jQuery",
                    "Git"
                ]
            },
            {
                title: "Future Blossom",
                role: "Full stack PHP Developer",
                media: "/media/futureblossom.jpg",
                date: "12nd Aug 2015",
                tags: [
                    "jQuery",
                    "PHP",
                    "MySQL",
                    "PayPal",
                    "CSS",
                    "Git",
                ]
            },
            {
                title: "Hair & Beauty IOM",
                role: "Full stack PHP Developer",
                media: "/media/hairandbeauty.jpg",
                date: "12nd Aug 2015",
                tags: [
                    "jQuery",
                    "PHP",
                    "VendHQ",
                    "API",
                    "PayPal",
                    "MySQL",
                    "CSS",
                    "Git"
                ]
            }
        ]
    }

    render() {
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
