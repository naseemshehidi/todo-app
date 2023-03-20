import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions';

const AddTask = ({ addTask }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (description.trim() !== '') {
      addTask({
        id: Date.now(),
        description,
        isDone: false
      });
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default connect(null, { addTask })(AddTask);