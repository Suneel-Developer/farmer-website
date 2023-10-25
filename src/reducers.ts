import { combineReducers } from 'redux';
import networkReducer from './networkReducer';

const rootReducer = combineReducers({
  network: networkReducer,
});

export default rootReducer;
