import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';
import Task from './Task';

const ListTask = ({ tasks, filter, setFilter }) => {
  const filteredTasks = tasks.filter(task =>
    filter === 'done' ? task.isDone : filter === 'not done' ? !task.isDone : true
  );

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not done')}>Not Done</button>
      </div>
      <ul>
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks,
  filter: state.filter
});

export default connect(mapStateToProps, { setFilter })(ListTask);