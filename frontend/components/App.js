import React from 'react'
import Form from './Form';
import TodoList from './TodoList';


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
        }, 
        {
          name: 'Walk Momo and Kiki', 
          id: 1528817084359, 
          completed: false
        }, 
        {
          name: 'Study Class Components', 
          id: 1528817084365, 
          completed: false
        }
      ]
    }
  }



  handleAdd = (name) => {

    const newTodo = {
      name: name, 
      id: Date.now(), 
      completed: false 
    }


    this.setState({ 
      ...this.state, 
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    //1. set state 
    //2. loop through all todos 
    //3. remove all todos that have completed === true 
    //4. save filtered todos to state 
    this.setState({
      ...this.state, 
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    }); 
  }



  render() {
    const { todos } = this.state; 


    return (
      <div>
        <h1>My To-Do List</h1>
          <TodoList  todos={todos} />
          <Form handleSubmit={this.handleSubmit} handleAdd={this.handleAdd}/>
          <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  }
}

export default App; 
