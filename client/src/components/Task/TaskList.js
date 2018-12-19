import React from 'react';
import TaskSummary from './TaskSummary';

const TaskList = (props) => {
    let tasks = props.tasks;
    return (
        <div className='project-list section'>
            {tasks.map(task => {
                return <TaskSummary key={task.id} name={task.name} status={task.status} assigend={task.assigend} id={task.id} desc={task.desc}/>
            })}
        </div>
    )
}

export default TaskList;