import React from 'react';
import './Task.css';

const TaskSummary = () => {
    return (
        <div className='card z-depth-0 task-summary'>
            <div className='card-content grey-text text-darken-3'>
                <span className='card-title'>Task1</span>
                <p>Hosted By ..</p>
                <p className='grey-text'>3rd septemper</p>
            </div>
        </div>
    )
}

export default TaskSummary;