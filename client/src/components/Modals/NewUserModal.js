import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
import './Modal.css';
import gql from "graphql-tag";
import { graphql } from 'react-apollo'
import { Modal, Button } from 'react-materialize';

const query = gql`
    {
      users {
        userName
      }
    }
  `
const createUser = gql`
  mutation($firstName:String!,$lastName:String!,$userName:String!,$password:String!,$email:String!,$userType:String!){
    createUser(userInput:{
      firstName:$firstName,
      lastName:$lastName,
      userName:$userName,
      password:$password,
      email:$email,
      userType:$userType
    })
    {userName}
}
  `
class NewUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      userType: ''
    }
  }
  submitForm(e) {
    e.preventDefault();

    this.props.mutate({
      variables: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
        userType: this.state.userType,
      }, refetchQueries: [{ query: query }]
    });
  }
  render() {
    return (
      <Modal id='userModal'
        open={this.props.open}
        bottomSheet
        header='New User'
        actions={<Button onClick={this.submitForm.bind(this)}>Create</Button>}>
        <div>
          <form id='userform'>
            <Row>
              <Input s={4} label="First Name" onChange={(e) => this.setState({ firstName: e.target.value })} />
              <Input s={4} label="Last Name" onChange={(e) => this.setState({ lastName: e.target.value })} />
              <Input s={4} label="user Name" onChange={(e) => this.setState({ userName: e.target.value })} />
            </Row>
            <Row>
              <Input s={4} label="Email" onChange={(e) => this.setState({ email: e.target.value })} />
              <Input s={4} label="Password" onChange={(e) => this.setState({ password: e.target.value })} />
              <Input s={4} label="User Type" onChange={(e) => this.setState({ userType: e.target.value })} />
            </Row>
          </form>
        </div>
      </Modal>
    )
  }
}

export default graphql(createUser)(NewUserModal)