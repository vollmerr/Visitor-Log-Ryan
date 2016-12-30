import {combineReducers} from 'redux';
import adminPermissions from './Admin-PermissionsReducer';

const rootReducer = combineReducers({
  adminPermissions
});

export default rootReducer;
