import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        Todo App
        <form>
          <input placeholder="...todo"/>
          <button>Add To-Do</button>
          <button>Clear Completed</button>
        </form>
      </div>
    )
  }
}
