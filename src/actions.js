export const addTask = task => ({
    type: 'ADD_TASK',
    payload: task
  });
  
  export const toggleTask = id => ({
    type: 'TOGGLE_TASK',
    payload: id
  });
  
  export const editTask = (id, description) => ({
    type: 'EDIT_TASK',
    payload: { id, description }
  });
  
  export const setFilter = filter => ({
    type: 'SET_FILTER',
    payload: filter
  });