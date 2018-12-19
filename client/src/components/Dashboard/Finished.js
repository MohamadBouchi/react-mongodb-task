import React from 'react';
import TaskList from '../Task/TaskList';

const Finished = (props) => {
  let tasks = props.tasks;
  return (
    <div>
      <h5>({tasks.length}) Finished</h5>
      <hr></hr>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default Finished;