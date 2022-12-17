import React, { Component } from 'react'

export default class Next extends Component {
    state = {
        name: "Kajol",
        roll: 22
    }


    render() {
        return (
            <div>
                <h2>Name: {this.state.name}</h2>
                <h2>Roll: {this.state.roll}</h2>
                <button onClick={() => this.setState({ roll: this.state.roll + 1 })}>Click</button>
            </div>
        )
    }
}
