import Dispatcher from './Dispatcher'
export const increment = ()=>{
    const action = {
        type: "INCREMENT"
    }

    return action;
    // Dispatcher.execute(action);
}

export const decrement = () =>{
    const action = {
        type: 'DECREMENT'
    }

    return action;
    // Dispatcher.execute(action);

}

export const zero = () => {
    const action = {
        type: 'ZERO'
    }

    return action;
    
    // Dispatcher.execute(action);

}