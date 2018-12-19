import React from 'react'
import TaskList from '../Task/TaskList';

const Open = (props) => {
  let tasks = props.tasks;
  return (
    <div>
      <h5>({tasks.length}) Open</h5>
      <hr></hr>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default Open;