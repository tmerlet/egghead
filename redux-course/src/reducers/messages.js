import {TODO_ADD, TODOS_LOAD, TODO_REPLACE, TODO_REMOVE} from './todo';

const MESSAGE_SHOW = 'MESSAGE_SHOW';

export const showMessage = (msg) => ({type: MESSAGE_SHOW, payload: msg});

export default (state = '', action) => {
  switch (action.type) {
    case MESSAGE_SHOW:
      return action.payload;
    case TODO_ADD:
      return '';
    case TODOS_LOAD:
        return '';
    case TODO_REPLACE:
        return '';
    case TODO_REMOVE:
        return '';
    default:
      return state;
  }
}
