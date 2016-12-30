import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  adminPermissions: {
    data: [
      {
        id: 1,
        name: 'name1',
        role: 1,
        active: true
      }, {
        id: 2,
        name: 'name2',
        role: 3,
        active: true
      }, {
        id: 3,
        name: 'name3',
        role: 1,
        active: false
      }
    ],
    new: {
      id: 0,
      name: '',
      role: 0,
      active: true
    },
    editing: -1
  }
};

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())));
}
