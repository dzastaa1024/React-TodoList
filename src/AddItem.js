import React, { Component } from 'react';

export default class AddItem extends Component {
    state = {
        value: [],
    }

    handleChange = e => this.setState({ value: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state.value);
        this.setState({
            value: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Add todo" type="text" value={this.state.value} onChange={this.handleChange} />
                <button> Submit </button>
            </form>
        )
    }
}