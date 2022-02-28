import { createStore } from 'redux';
import { cellReducer } from '../store/reducers';

const store = createStore(cellReducer);

export default store;
