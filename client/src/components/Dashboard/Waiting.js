import React from 'react'
import TaskList from '../Task/TaskList';

const Waiting = (props) => {
  let tasks = props.tasks;
  return (
    <div>
      <h5>({tasks.length}) Waiting</h5>
      <hr></hr>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default Waiting;