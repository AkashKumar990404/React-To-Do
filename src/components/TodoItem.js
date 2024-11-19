
import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <ListItem
      divider
      secondaryAction={
        <IconButton edge="end" onClick={() => deleteTodo(todo.id)} style={{ color: '#f44336' }}>
          <DeleteIcon />
        </IconButton>
      }
      style={{
        backgroundColor: todo.completed ? '#e0f7fa' : '#f9fbe7',
        borderRadius: '8px',
        margin: '5px 0',
        padding: '10px',
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        color="primary"
      />
      <ListItemText
        primary={todo.text}
        primaryTypographyProps={{
          style: {
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#9e9e9e' : '#424242',
            fontWeight: todo.completed ? 'normal' : 'bold',
          },
        }}
      />
    </ListItem>
  );
};

export default TodoItem;
