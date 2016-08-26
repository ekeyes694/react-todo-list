import React, { Component } from 'react';
import actions from '../redux/actions';
    
var TodoInput = React.createClass({   
    
    getInitialState: function () {
       return {
           inputText: ''
       } 
    },
    
    handleChange: function (event) {
       this.setState({inputText: event.target.value})
    },
    handleSubmit: function (event) {
      event.preventDefault()
      this.props.addTodo(this.state.inputText)
    },
    render() {
        return (
            <div>
            <h1>ToDo List</h1>
            <hr />
            <form onSubmit={this.handleSubmit.bind(this)}>
            <input type='text' placeholder="Add ToDo..." value={this.state.inputText} onChange={this.handleChange.bind(this)}  />
            <input type='submit' text='Submit' />
            </form>
            </div>
        );
    }

});

export default TodoInput;