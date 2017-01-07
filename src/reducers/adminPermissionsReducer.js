import * as types from "../actions/actionTypes";

const adminPermissions = (state = {}, action) => {
  console.log(`IN adminPermissions reducer, state: ${state}, action: ${action}`);
  let key;
  switch (action.type) {
    case types.TABLE_ROW_ADD:
      return (Object.assign({}, state, {
        table: [
          ...state.table,
          state.newRow
        ],
        newRow: {
          "id": state.newRow.id + 1,
          "name": "",
          "role": 0,
          "active": true
        }
      }));
    case types.TABLE_ROW_DELETE:
      return (Object.assign({}, state, {
        table: state.table.filter(row => {
          return + row.id !== + action.id;
        })
      }));
    case types.TABLE_CELL_UPDATE:
      return (Object.assign({}, state, {newRow: Object.assign({}, state.newRow, {
          [action.key]: action.value
        })}));

    default:
      return state;
  }
};

export default adminPermissions;
