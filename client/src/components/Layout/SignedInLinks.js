import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NewTaskModal from '../Modals/NewTaskModal';
import NewUserModal from '../Modals/NewUserModal';

class SignedInLinks extends Component {
    state = {
        openTaskModal: false,
        openUserModal: false
    }
    render() {
        return (
            <ul className='right'>
                <li>
                    <a onClick={() => {
                        if (!document.getElementById('userModal').classList.contains('open')) {
                            this.setState({ openUserModal: false }, () => {
                                this.setState({ openUserModal: true })
                            })
                        }
                    }}>New User</a>
                </li>
                <li>
                    <a onClick={() => {
                        if (!document.getElementById('taskModal').classList.contains('open')) {
                            this.setState({ openTaskModal: false }, () => {
                                this.setState({ openTaskModal: true })
                            })
                        }
                    }}>New Task</a>
                </li>
                <li><NavLink to='/'>Log out</NavLink></li>
                <li><NavLink to='/' className='btn btn-floating pink lighten-1'>Mo</NavLink></li>
                <NewTaskModal open={this.state.openTaskModal} />
                <NewUserModal open={this.state.openUserModal} />

            </ul>
        );
    }
}

export default SignedInLinks;