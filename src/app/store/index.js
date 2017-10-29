import {createStore} from 'redux';
import reducer from '../reducer';


const defaultState=  {
  text: "Default Text"
}

export const configureStore = (initialState = defaultState) => {
  const store = createStore(reducer, initialState);
  return store;
}
