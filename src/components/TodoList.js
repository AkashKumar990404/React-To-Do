
import React from 'react';
import TodoItem from './TodoItem';
import { List } from '@mui/material';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <List style={{ marginTop: '20px' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;
