import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter=useSelector(state=>state.counter)
  const dispatch=useDispatch()
  const toggleCounterHandler = () => {};

  const incrementHandler=()=>{
    dispatch({type:'increment'})
  };

  const decrementHandler=()=>{
    dispatch({type:'decrement'})
  }

  const iecrementBy2Handler=()=>{
    dispatch({type:'incrementBy2'})
  }
  const decrementBy2Handler=()=>{
    dispatch({type:'decrementBy2'})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={iecrementBy2Handler}>IecrementBy2</button>
        <button onClick={decrementBy2Handler}>DecrementBy2</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
