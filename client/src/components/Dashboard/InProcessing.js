import React from 'react'
import TaskList from '../Task/TaskList';

const InProcessing = (props) => {
  let tasks = props.tasks;
  return (
    <div>
      <h5>({tasks.length}) InProcessing</h5>
      <hr></hr>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default InProcessing;