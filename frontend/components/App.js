import React from 'react'
import Form from './Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  render() {
    const { todos } = this.state; 
    console.log(todos)


    return (
      <div>
        <h1>My To-Do List</h1>
        <ul>
          {
            todos.map(todo => {
              return (<li key={todo.id}>{todo.name}</li>)
            })
          }
        </ul>
       
          <Form handleAdd={this.handleAdd}/>
          <button>Clear Completed</button>
      
      </div>
    )
  }
}

export default App; 
