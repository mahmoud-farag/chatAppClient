import React from 'react';



class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };


    }
    componentDidMount() {
        this.remove = setInterval(() => this.tick(), 1000);

    }
    // clear the resources from garbage
    componentWillUnmount() {
        clearInterval(this.remove);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                <h1>What is the Time!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Counter;