import React, { Component } from 'react';
import './Task.css';

class TaskSummary extends Component {
    onDragStart = (e) => {
        let data = {id: this.props.id, status: this.props.status};
        let stringData = JSON.stringify(data)
        e.dataTransfer.setData('data',stringData);
    }
    render() {
        return (
            <div className='card z-depth-0 task-summary' draggable onDragStart={(e) => {this.onDragStart(e)}}>
                <div className='card-content grey-text text-darken-3'>
                    <span className='card-title'>{this.props.name}
                        {/* <div className="btn btn-floating right">{this.props.assigend}</div> */}
                        <img className="btn btn-floating right" src={require('../../me.png')}/>
                    </span>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <p className='left-align'>{this.props.desc}</p>
                    <br></br>
                    <p className='left-align grey-text'>3rd septemper</p>
                </div>
            </div>
        )
    }
}

export default TaskSummary;