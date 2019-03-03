// import EventEmitter from 'EventEmitter';
// import Dispatcher from './Dispatcher';

import { createStore } from 'redux';

const initialtally = {
  count: 100
};

// const increment = () => {
//   tally.count += 1;
// };

// const decrement = () => {
//   tally.count -= 1;
// };

// const zero = () => {
//   tally.count = 0;
// };

// class TallyStore extends EventEmitter {
//   getTally() {
//     return Object.assign({}, tally);
//   }
//   addChangeListener(callback) {
//     this.addListener('CHANGE', callback);
//   }
//   removeChangeListener(callback) {
//     this.removeListener('CHANGE', callback);
//   }
//   emitChange() {
//     this.emit('CHANGE');
//   }
// }

// const instance = new TallyStore();
// export default instance;

const countReducer = (previous = initialtally,action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: previous.count + 1
      }
    case 'DECREMENT':
    return {
      count: previous.count - 1
    }
    case 'ZERO':
    return {
      count: 0
    }
    default:
      return previous
  }
};

export default createStore(countReducer);

// Dispatcher.register(handleAction);
