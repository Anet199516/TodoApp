import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleItem = this.handleItem.bind(this);
  }

  handleItem(id) {
    this.setState((prevState) => {
      const newTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: newTodos,
      };
    });
  }

  render() {
    const { todos } = this.state;
    const todoItems = todos.map(item => (
      <TodoItem key={item.id} item={item} handleItem={this.handleItem} />
    ));
    return (
      <>
        <h1 className="title">todos</h1>
        <div className="todo-list">
          <h1>
            {todos.length} has left
          </h1>
          {todoItems}
          <input
            type="text"
            className="input-todo-list"
          />
          <button
            type="button"
            className="button-todo-list"
          >
          Add
          </button>
        </div>

      </>
    );
  }
}

export default App;
