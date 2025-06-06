import React from 'react';


function Task({ task }) {
  return (
    <div className="task-item">
      <p>{task}</p>
    </div>
  );
}

export default Task;