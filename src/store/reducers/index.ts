import { combineReducers, Reducer } from 'redux';
import taskReducer from './task';

const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  task: taskReducer,
});

export default reducers;
