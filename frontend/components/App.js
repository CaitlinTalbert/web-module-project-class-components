import React from 'react'
import Form from './Form';
import TodoList from './TodoList';
import axios from 'axios';

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

  componentDidMount() {
    axios.get('http://localhost:9000/api/todos')
    .then(res => {
      console.log(res.data.data)
      this.setState({ 
        ...this.state, todos: res.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  /**
  componentDidUpdate(prevProps, prevState) {
    if(this.state.name !== prevState.name)
    axios.post(`http://localhost:9000/api/todos${this.state.name}`)
      .then(res => {
        console.log(res)
      })

  }
  */

  handleAdd = (name) => {
    const newTodo = {
      name: name, 
      id: Date.now(), 
      completed: false 
    }
    const payload = {name : ""}
    axios.post(`http://localhost:9000/api/todos`, this.state.name, payload)
    .then(res => {
      console.log(res)
    })
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



  handleToggle = (clickedId) => {
    axios.get(`http://localhost:9000/api/todos/${clickedId}`)
      .then(res => {
        console.log(res.data)     
    this.setState({ 
      ...this.state, 
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
          return {
            ...todo, 
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  })
      .catch(err => {
      console.log(err)
    })
  }
  




  render() {
    const { todos } = this.state; 


    return (
      <div>
        <h1>My To-Do List</h1>
          <TodoList handleToggle={this.handleToggle} todos={todos} />
          <Form handleSubmit={this.handleSubmit} handleAdd={this.handleAdd}/>
          <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  }
}

export default App; 
