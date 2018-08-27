import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects/">Projects</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}
