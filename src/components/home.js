import React, { Fragment, Component } from 'react';

class Home extends Component {

    state = {
        workwith: [
            "HTML",
            "CSS",
            "Javascript",
            "React",
            "Redux",
            "ES6"
        ],
        workwithcounter: 0,
        workwithstring: ""
    }

    componentDidMount(){
        setInterval(() => {
            var word = this.state.workwith[this.state.workwithcounter].split("");
            setInterval(() => {

            })
            // UPDATE WORK TYPE COUNT
            const count = (
                (this.state.workwithcounter + 1) >= this.state.workwith.length ?
                0 : this.state.workwithcounter + 1
            )
            this.setState({ workwithcounter: count })

        }, 2000);
    }

    render() {
        return (
            <Fragment>
                <div className="hero">
                    <h1>Hi, I'm Hayden Bruin</h1>
                    <h2>I work with <span>{this.state.workwith[this.state.workwithcounter]}</span></h2>
                </div>
            </Fragment>
        );
    }
}

export default Home