import {createStore} from 'dedux';
import modifiers from './modifiers';
import actions from './actions';
import initialState from '../initialState';

const store = createStore(modifiers, actions, initialState);
export default store;