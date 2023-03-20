import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleTask, editTask } from '../actions';

const Task = ({ task, toggleTask, editTask }) => {
  const [description, setDescription] = useState(task.description);

  const handleToggle = () => {
    toggleTask(task.id);
  };

  const handleEdit = e => {
    e.preventDefault();
    if (description.trim() !== '') {
      editTask(task.id, description);
    }
  };

  return (
    <li>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} />
      <form onSubmit={handleEdit}>
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </li>
  );
};

export default connect(null, { toggleTask, editTask })(Task);