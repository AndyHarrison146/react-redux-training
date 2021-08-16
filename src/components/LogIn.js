import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {logIn} from '../actions/index';

const LogIn = () => {
    let isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch();

    return (
        <div>
            {isLogged && <h3>Some valuable information i shouldnt see</h3>}
            <button onClick={() => dispatch(logIn())}>{isLogged ? 'Log out' : 'Log in'}</button>
        </div>
    )
}

export default LogIn
