import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import './NewTaskModal.css';

export default class NewTaskModal extends Component {
  render() {
    return (
      <div>
        <Row>
          <Input label='Date' name='on' type='date' onChange={function(e, value) {console.log(value)}} />
          <Input s={6} label="Task Title" />
          <Input s={12} label="Task Description" type='textarea' />
        </Row>
      </div>
    )
  }
}
