import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

import { counterActions } from '../store';

const Counter = () => {
  const counter=useSelector(state=>state.counter.counter)
  const show=useSelector(state=>state.counter.showCounter)
  const dispatch=useDispatch()

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  };

  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }

  const increaseHandler=()=>{
    dispatch(counterActions.increase(2)) // {type:SONE_UNIQUE_IDENTIFIER, payload:2}
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>IecrementBy2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
