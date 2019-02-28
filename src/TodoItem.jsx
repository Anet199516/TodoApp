import React from 'react';

const TodoItem = (props) => {
  const stylesForCompleted = {
    fontStyle: 'italic',
    color: '#cdcdcd',
    textDecoration: 'line-through',
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleItem(props.item.id)}
      />
      <p style={props.item.completed ? stylesForCompleted : null }>{props.item.text}</p>
    </div>
  );
};

export default TodoItem;
