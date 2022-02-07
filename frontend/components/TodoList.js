import React from 'react'
import Todo from './Todo'; 


export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = ""
  }
  render() {
    return (
         <ul>
          { 
            this.props.todos && this.props.todos.map(todo => {
              return (<Todo key={todo.id} handleToggle={this.props.handleToggle} todo={todo}/>)
            })
          }
        </ul>
    )
  }
}
