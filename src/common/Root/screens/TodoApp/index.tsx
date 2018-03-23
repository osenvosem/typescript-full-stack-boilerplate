import React, { Component, KeyboardEvent } from "react";
import { connect } from "react-redux";

import * as actions from "./actionCreators";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Filters from "./components/Filters";
import { filterTodos } from "./utils";

import { TRootState } from "../../../types";
import {
  TProps,
  TState,
  TTodo,
  TAddTodoHandler,
  TRemoveTodoHandler,
  TToggleTodoHandler,
  TInputChangeHandler,
  FilterTypes,
  TFilterChangeHandler
} from "./types";

class Todo extends Component<TProps, TState> {
  readonly state = { inputValue: "" };

  componentWillMount() {
    if (!this.props.todos.length) this.props.fetchTodos();
  }

  handleAddTodo: TAddTodoHandler = e => {
    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  handleRemoveTodo: TRemoveTodoHandler = id => {
    this.props.removeTodo(id);
  };

  handleToggleTodo: TToggleTodoHandler = id => {
    this.props.toggleTodo(id);
  };

  handleInputChange: TInputChangeHandler = e => {
    if (e.key === "Enter") this.handleAddTodo(e);
    else this.setState({ inputValue: e.currentTarget.value });
  };

  handleFilterChange: TFilterChangeHandler = e => {
    const filter = e.currentTarget.dataset.filter;
    if (filter) {
      this.props.changeFilter(filter);
    }
  };

  render() {
    let todos = filterTodos(this.props.todos, this.props.filter);
    return (
      <>
        <TodoInput
          onButtonClick={this.handleAddTodo}
          onInputChange={this.handleInputChange}
          inputValue={this.state.inputValue}
        />
        {this.props.todosRequested ? <p>Loading...</p> : null}
        <TodoList
          todos={todos}
          onAddTodo={this.handleAddTodo}
          onRemoveTodo={this.handleRemoveTodo}
          onToggleTodo={this.handleToggleTodo}
        />
        <Filters
          onFilterChange={this.handleFilterChange}
          value={this.props.filter}
        />
      </>
    );
  }
}

const mapStateToProps = (state: TRootState) => ({
  ...state.todoApp
});

export default connect(mapStateToProps, actions)(Todo);
