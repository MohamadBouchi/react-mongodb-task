import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import './Modal.css';
import gql from "graphql-tag";
import {graphql} from 'react-apollo'


const query = gql`
    {
      tasks {
        title
      }
    }
  `
const createTask = gql`
  mutation($title:String!,$description:String!,$date:String!){
    createTask(taskInput:{
      title:$title,
      description:$description,
      date:$date
    })
    {title}
}
  `
class NewTaskModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:'',
      description: '',
      date: ''
    }
  }
  submitForm(e){
    e.preventDefault();
    
    this.props.mutate({variables:{
      title:this.state.title,
      description:this.state.description,
      date:this.state.date
    }, refetchQueries :[{query: query}]
  });
  }
  render() {
    return (
      <div>
        <Row>
          <form onSubmit={this.submitForm.bind(this)} id='taskform'>
          <Input label='Date' name='on' type='date' onChange={(e) => this.setState({date:new Date(e.target.value).toISOString()})}/>
          <Input s={6} label="Task Title" onChange={(e) => this.setState({title:e.target.value})}/>
          <Input s={10} label="Task Description" type='textarea' onChange={(e) => this.setState({description:e.target.value})}/>
          <button>test</button>
          </form>
        </Row>
      </div>
    )
  }
}

export default graphql(createTask)(NewTaskModal)