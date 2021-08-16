import React from 'react';
import {increment, decrement} from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';


const CounterView = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default CounterView
