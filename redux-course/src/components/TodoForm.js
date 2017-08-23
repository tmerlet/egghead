import React, {Component} from 'react';
import {updateCurrent, saveTodo} from '../reducers/todo';
import {connect} from 'react-redux';

class TodoForm extends Component {
  handleInputChange = (evt) => {
    const val = evt.target.value
    this.props.updateCurrent(val);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.saveTodo(this.props.currentTodo)
  }

  render() {
    const {currentTodo} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
        onChange={this.handleInputChange}
        value={currentTodo}/>
      </form>
    );
  }
}

export default connect(
  (state) => ({currentTodo: state.todo.currentTodo}), {updateCurrent, saveTodo}
)(TodoForm)
