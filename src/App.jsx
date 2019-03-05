import React from 'react';
import TodoItem from './TodoItem';
import FilteredButtons from './FilteredButtons';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Take out the trash',
          completed: true,
        },
        {
          id: 2,
          text: 'Grocery shopping',
          completed: false,
        },
        {
          id: 3,
          text: 'Clean gecko tank',
          completed: false,
        },
      ],

      mode: 'All',
      /* eslint-disable react/no-unused-state */
      newItemsText: '',

    };
    this.getModeForItems = this.getModeForItems.bind(this);
    this.handleItem = this.handleItem.bind(this);
  }

  getModeForItems(mode) {
    this.setState({ mode });
  }

  getTodosForRender() {
    const { todos, mode } = this.state;
    let filteredItems = todos;
    if (mode === 'Active') {
      filteredItems = todos.filter(item => item.completed === false);
    }
    if (mode === 'Completed') {
      filteredItems = todos.filter(item => item.completed === true);
    }
    return filteredItems;
  }

  handleItemAdded() {
    this.setState(({ todos, newItemText }) => {
      if (!newItemText) return;
      const newTodo = {
        id: todos.length + 1,
        text: newItemText,
        completed: false,
      };
      /* eslint-disable consistent-return */
      return {
        todos: [...todos, newTodo],
        newItemText: '',
      };
    });
  }

  handleNewTextAdded(text) {
    this.setState({
      newItemText: text,
    });
  }

  handleItem(id) {
    this.setState((prevState) => {
      const newTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: newTodos,
      };
    });
  }

  render() {
    const { todos, newItemText } = this.state;
    const activeTodos = todos.filter(item => item.completed === false);
    const todosForRender = this.getTodosForRender();
    const todoItems = todosForRender.map(item => (
      <>
        <TodoItem
          key={item.id}
          item={item}
          handleItem={this.handleItem}
        />
      </>
    ));
    return (
      <>
        <h1 className="title">todos</h1>
        <div className="todo-list">
          <h1>
            {activeTodos.length}
            {' '}
            has left
          </h1>
          {todoItems}
          <input
            type="text"
            className="input-todo-list"
            value={newItemText}
            onChange={event => this.handleNewTextAdded(event.target.value)}
          />
          <button
            type="button"
            className="button-todo-list"
            onClick={() => this.handleItemAdded()}
          >
          Add
          </button>
          <div className="container-buttons">
            <FilteredButtons onClick={this.getModeForItems}>
            All
            </FilteredButtons>

            <FilteredButtons onClick={this.getModeForItems}>
            Active
            </FilteredButtons>

            <FilteredButtons onClick={this.getModeForItems}>
            Completed
            </FilteredButtons>
          </div>
        </div>

      </>
    );
  }
}

export default App;
