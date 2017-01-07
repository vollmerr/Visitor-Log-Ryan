import {combineReducers} from 'redux';
import adminPermissions from './adminPermissionsReducer';

const rootReducer = combineReducers({
  adminPermissions
});

export default rootReducer;
