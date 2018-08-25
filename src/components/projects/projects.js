import React, { Component } from 'react'
import Project from './project';

export default class Projects extends Component {

    state = {
        projects: [
            {
                title: "Contact Energy",
                slug: "contact-energy",
                role: "Front-end Developer",
                media: "/media/contact.jpg",
                date: "23rd Aug 2018",
                tags: [
                    "SCSS",
                    "Gulp",
                    "Git",
                    "HTML",
                    "jQuery",
                ]
            },
            {
                title: "Future Blossom",
                slug: "future-blossom",
                role: "Full stack PHP Developer",
                media: "/media/futureblossom.jpg",
                date: "12nd Aug 2015",
                tags: [
                    "jQuery",
                    "PHP",
                    "MySQL",
                    "Git",
                    "PayPal",
                    "CSS",
                ]
            },
            {
                title: "Hair & Beauty IOM",
                slug: "hair-and-beauty-iom",
                role: "Full stack PHP Developer",
                media: "/media/hairandbeauty.jpg",
                date: "12nd Aug 2015",
                tags: [
                    "jQuery",
                    "PHP",
                    "VendHQ",
                    "API",
                    "Git",
                    "PayPal",
                    "MySQL",
                    "CSS",
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
