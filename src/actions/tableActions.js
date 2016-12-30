import * as types from "./actionTypes";

/**
 * Successfully added new entry to database
 * @param  {object} row - Row of data to add
 * @return {object}     - Row of data to dispatch
 */
export const tableRowAddSuccess = (row) => ({type: types.TABLE_ROW_ADD_SUCCESS, row});

/**
 * Attempt to async add new entry to database, dispatches other actions based off results
 * @param  {string} table - Name of table to update
 * @return {function}     - Async function using redux-thunk middleware
 *
 * @param  {function} dispatch  - Provided by redux-thunk, allows dispatch of other action creators
 * @param  {function} getState  - Provided by redux-thunk, allows access to the stores state
 */
export const tableRowAdd = (table) => (dispatch, getState) => {
  let state = getState()[table].new;
  if (state.name && state.role > 0) {
    dispatch(tableRowAddSuccess(state));
  }
}

/**
 * Successfully edited existing entry in database based off ID
 * @param  {number} id  - ID of row to edit
 * @return {object}     - ID of row to dispatch
 */
export const tableRowEditSuccess = (id) => ({type: types.TABLE_ROW_EDIT_SUCCESS, id});

/**
 * Attempt to async edit existing entry in database, dispatches other actions based off results
 * @param  {number} id  - ID of entry to edit
 * @return {function}   - Async function using redux-thunk middleware
 *
 * @param  {function} dispatch  - Provided by redux-thunk, allows dispatch of other action creators
 * @param  {function} getState  - Provided by redux-thunk, allows access to the stores state
 */
export const tableRowEdit = (id) => (dispatch, getState) => {
  dispatch(tableRowDeleteSuccess(id));
}

/**
 * Toggles what row (if any) is being edited
 * @param  {number} id  - ID of row to edit
 * @return {object}     - ID of row to dispatch
 */
export const tableRowEditToggle = (id) => ({type: types.TABLE_ROW_EDIT_TOGGLE, id});

/**
 * Sucessfully deleted row based off ID
 * @param  {number} id  - ID of row to delete
 * @return {object}     - ID of row to dispatch
 */
export const tableRowDeleteSuccess = (id) => ({type: types.TABLE_ROW_DELETE_SUCCESS, id});

/**
 * Attempt to async delete row from database, dispatch otehr actions based off results
 * @param  {number} id   - ID of row to delete
 * @return {function}    - Async function using redux-thunk middleware
 *
 * @param  {function} dispatch  - Provided by redux-thunk, allows dispatch of other action creators
 * @param  {function} getState  - Provided by redux-thunk, allows access to the stores state
 */
export const tableRowDelete = (id) => (dispatch, getState) => {
  dispatch(tableRowDeleteSuccess(id));
}

/**
 * Update corresponding state of cell based off input
 * @param  {string} key   - Key of value to update
 * @param  {string} value - Value to update
 * @return {object}       -
 */
// export const tableCellUpdate = (key, value, list) => ({type: types.TABLE_CELL_UPDATE, key, value, list});
export const tableCellUpdate = (id) => ({type: types.TABLE_CELL_UPDATE, id});

/**
 * Update corresponding state of cell based off attributes
 * @param  {string} key   - Key of value to update
 * @param  {string} value - Value to update
 * @return {object}       -
 */
export const tableCellToggle = (key, value) => ({type: types.TABLE_CELL_TOGGLE, key, value});
