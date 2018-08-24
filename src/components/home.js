import React, { Fragment, Component } from 'react';

import Icon from "./utils/icons";

class Home extends Component {

    state = {
        workwith: [
            "HTML",
            "CSS",
            "Javascript",
            "React",
            "Redux",
            "ES6",
            "VueJS"
        ],
        workwithcounter: 0
    }

    componentDidMount(){
        setInterval(() => {
            const count = (
                (this.state.workwithcounter + 1) >= this.state.workwith.length ?
                0 : this.state.workwithcounter + 1
            )
            this.setState({ workwithcounter: count })
        }, 2000);
    }

    scrollDown = () => {
        console.log('scroll down');
    }

    render() {
        return (
            <Fragment>
                <div className="hero">
                    <div className="hero__content">
                        <h1>Hi, I'm Hayden Bruin</h1>
                        <h2>I <Icon name="heart" height="24" width="24" /> <span>{this.state.workwith[this.state.workwithcounter]}</span></h2>
                    </div>
                    <div className="hero__footer">
                        <div onClick={() => this.scrollDown()}>
                            <Icon name="arrow-down" width="48px" height="48px" />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Home