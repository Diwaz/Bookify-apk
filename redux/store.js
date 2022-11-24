import reducer from './reducer'
import thunk from 'redux-thunk';

import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer';
import rootReducer from './reducer';


const middlewares = [thunk];

export default configureStore({ reducer: rootReducer }, applyMiddleware(...middlewares))