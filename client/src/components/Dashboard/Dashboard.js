import React, { Component } from 'react'
import Finished from './Finished';
import Waiting from './Waiting';
import InProcessing from './InProcessing';
import Open from './Open';
import Navbar from '../Layout/Navbar';
import './Dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard'>
        <Navbar />
        <div className='dashboard-container center-align'>
          <div className='row'>
              <div className='col s12 m3 cyan lighten-4'>
                  <Open />
              </div>
              <div className='col s12 m3 red lighten-4'>
                  <InProcessing />
              </div>
              <div className='col s12 m3 orange lighten-4'>
                  <Waiting />
              </div>
              <div className='col s12 m2 green accent-1'>
                  <Finished />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;