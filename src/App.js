
import React, { useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '30px', borderRadius: '10px' }}>
        <Typography variant="h3" align="center" gutterBottom style={{ color: '#1976d2' }}>
          To-Do List
        </Typography>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </Paper>
    </Container>
  );
}

export default App;
