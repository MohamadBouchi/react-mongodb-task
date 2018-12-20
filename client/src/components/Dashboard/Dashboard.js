import React, { Component } from 'react'
import Finished from './Finished';
import Waiting from './Waiting';
import InProcessing from './InProcessing';
import Open from './Open';
import Navbar from '../Layout/Navbar';
import './Dashboard.css';

class Dashboard extends Component {
  state = {
      tasks : [
      {name:'Task1',status:'open',assigend:'mb',id:1, desc:'M0040 Ausschreibungsauswertung Pannes'},
      {name:'Task2',status:'inprocessing',assigend:'as',id:2, desc:'M0064 EKG-Auswertungen Braam'},
      {name:'Task3',status:'open',assigend:'rm',id:3, desc:'M0028.3 ZU08 KIZE erstellen'},
      {name:'Task4',status:'waiting',assigend:'sl',id:4, desc:'M0027 Telefonverkauf  NL51'},
      {name:'Task5',status:'open',assigend:'kf',id:5, desc:'M0080 JVS GKT'},
      {name:'Task6',status:'finished',assigend:'ml',id:6, desc:'M0108V1 Sollzahlen Bollen'},
    ]
  }
  onDragOver = (e) => {
    e.preventDefault();
  }
  onDrop = (e, name, tasks) => {
    let data = JSON.parse(e.dataTransfer.getData("text"));
    let status = data.status;
    let id = data.id;
    if(status === 'open'){
      let newTasks = tasks.open.filter(t => {
        if (t.id === id){
          t.status = name
        } 
        return t
      });
      this.setState({
        ...this.state,
        newTasks
      })
    }
    else if(status === 'inprocessing'){
      let newTasks = tasks.inprocessing.filter(t => {
        if (t.id === id){
          t.status = name
        } 
        return t
      });
      this.setState({
        ...this.state,
        newTasks
      })
    }
    else if(status === 'waiting'){
      let newTasks = tasks.waiting.filter(t => {
        if (t.id === id){
          t.status = name
        } 
        return t
      });
      this.setState({
        ...this.state,
        newTasks
      })
    }
    else if(status === 'finished'){
      let newTasks = tasks.finished.filter(t => {
        if (t.id === id){
          t.status = name
        } 
        return t
      });
      this.setState({
        ...this.state,
        newTasks
      })
    }
  }
  render() {
    let tasks = {
      open: [],
      inprocessing: [],
      waiting: [],
      finished: []
    };
    this.state.tasks.forEach((t) => {
      if (t.status === 'open')
        tasks.open.push(t);
      else if(t.status === 'inprocessing')
        tasks.inprocessing.push(t);
      else if(t.status === 'waiting')
        tasks.waiting.push(t);
      else if(t.status === 'finished')
        tasks.finished.push(t);
    });
    return (
      <div className='dashboard'>
        <Navbar />
        <div className='dashboard-container center-align'>
          <div className='row'>
              <div className='col s12 m2 cyan lighten-4'
                onDragOver={(e) =>this.onDragOver(e)}
                onDrop={(e) =>this.onDrop(e, 'open', tasks)}>
                  <Open tasks={tasks.open}/>
              </div>
              <div className='col s12 m2 red lighten-4' 
                onDragOver={(e) =>this.onDragOver(e)}
                onDrop={(e) =>this.onDrop(e, 'inprocessing', tasks)} >
                  <InProcessing tasks={tasks.inprocessing}/>
              </div>
              <div className='col s12 m2 orange lighten-4'
                onDragOver={(e) =>this.onDragOver(e)}
                onDrop={(e) =>this.onDrop(e, 'waiting', tasks)}>
                  <Waiting tasks={tasks.waiting}/>
              </div>
              <div className='col s12 m2 green accent-1'
                onDragOver={(e) =>this.onDragOver(e)}
                onDrop={(e) =>this.onDrop(e, 'finished', tasks)}>
                  <Finished tasks={tasks.finished}/>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;