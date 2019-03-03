import Dispatcher from './Dispatcher'
export const increment = ()=>{
    const action = {
        type: "INCREMENT"
    }

    Dispatcher.execute(action);
}

export const decrement = () =>{
    const action = {
        type: 'DECREMENT'
    }

    Dispatcher.execute(action);

}

export const zero = () => {
    const action = {
        type: 'ZERO'
    }
    
    Dispatcher.execute(action);

}