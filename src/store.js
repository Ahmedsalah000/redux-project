import { configureStore } from 'redux';
import { reducerCounter } from './reducer.js';

//1- create store
export const storeCounter = configureStore(reducerCounter);
  