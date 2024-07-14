// third-party
import { combineReducers } from 'redux';

// redux states (reducers) import
import menu from './menu';
import snackbar from './snackbar';
import categories from './categories';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  menu,
  snackbar,
  categories
});

export default reducers;
