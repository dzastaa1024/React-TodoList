import React, { Component } from 'react';
import AddItem from './AddItem';
import TodoList from './TodoList';

export default class App extends Component {
  state = {
    items: []
  }

  handleAdd = value => {
    this.setState({
      items: this.state.items.concat({ itemName: value, itemChecked: false }),
    })
  }

  render() {
    return (
      <>
        <AddItem add={this.handleAdd} />
        <TodoList items={this.state.items} />
      </>
    );
  }
}