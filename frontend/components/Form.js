import React from 'react'


const initialState = {
  input: ''
}


export default class Form extends React.Component {
  
  state = initialState; 


  handleChange = (e) => {
    this.setState({
      ...this.state, 
      input: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    this.props.handleAdd(this.state.input);
  }


  render() {
    return (
        <form>
        <input placeholder="...todo" onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Add To-Do</button>
        </form>
    )
  }
}
