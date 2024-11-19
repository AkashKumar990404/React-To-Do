
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <Box display="flex" justifyContent="center" mb={2} style={{ marginBottom: '20px' }}>
      <TextField
        variant="outlined"
        label="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        style={{ marginRight: '10px', backgroundColor: '#f1f3f4', borderRadius: '5px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        style={{
          padding: '10px 20px',
          backgroundColor: '#1976d2',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default AddTodo;
