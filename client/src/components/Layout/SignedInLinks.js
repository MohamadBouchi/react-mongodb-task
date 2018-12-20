import React from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button } from 'react-materialize';
import NewTaskModal from '../Modals/NewTaskModal';

const SignedInLinks = () => {
    return (
        <ul className='right'>
            <li>
                <Modal
                    bottomSheet
                    header='New Task'
                    actions={<Button>Create</Button>}
                    trigger={<a>Create Task</a>}>
                    <NewTaskModal/>
                </Modal>
            </li>
            <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>Mo</NavLink></li>

        </ul>
    );
};

export default SignedInLinks;