import EventEmitter from 'EventEmitter';
import Dispatcher from './Dispatcher';

const tally = {
  count: 0
};



class TallyStore extends EventEmitter {
  getTally() {
    return Object.assign({}, tally);
  }
  addChangeListener(callback) {
    this.addListener('CHANGE', callback);
  }
  removeChangeListener(callback) {
    this.removeListener('CHANGE', callback);
  }
  emitChange() {
    this.emit('CHANGE');
  }
}

const instance = new TallyStore();
export default instance;

const handleAction = (action) => {
  switch (action.type) {
    case 'INCREMENT':
      tally.count += 1;
      break;
    case 'DECREMENT':
      tally.count -= 1;
      break;
    case 'ZERO':
      tally.count = 0;
      break;
    default:
      // do nothing
  }
  instance.emitChange();
};

Dispatcher.register(handleAction);
