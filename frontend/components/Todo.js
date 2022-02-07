import React from 'react'

export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = ""
  }

  handleClick = () => {
    this.props.handleToggle(this.props.todo.id);
  }

  render() {
    return (
      <div>{this.props.todo && <li onClick={this.handleClick}>{this.props.todo.name} { this.props.todo.completed?<span>- completed</span> : <span></span>}</li>}</div>)
  }
}


