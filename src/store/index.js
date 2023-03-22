
import {legacy_createStore} from 'redux';

const counterReducer=(state={counter:0},acttion)=>{
    if(acttion.type==='increment'){
        return {
            counter:state.counter+1
        }
    }
    if(acttion.type==='decrement'){
        return {
            counter:state.counter-1
        }
    }
    if(acttion.type==='incrementBy2'){
        return {
            counter:state.counter+2
        }
    }
    if(acttion.type==='decrementBy2'){
        return{
            counter:state.counter-2
        }
    }
    return state;
}

const store=legacy_createStore(counterReducer);

export default store;