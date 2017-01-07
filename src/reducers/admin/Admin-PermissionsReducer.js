// import * as types from "../actions/actionTypes";
//
// const filterByNotId = (table, id) => (table.filter(item => item.id !== + id));
// const filterById = (table, id) => (table.filter(item => item.id === + id));
//
// const getUpdatedCell = () => {}///TODO!!!!!!!?????????????
//
// const adminPermissions = (state = {}, action) => {
//   switch (action.type) {
//     case types.TABLE_ROW_ADD_SUCCESS:
//       let __CHANGE_THIS__ = Math.floor(Math.random() * 99999);
//       let newRow = {
//         ...state.new,
//         id: __CHANGE_THIS__
//       };
//       return {
//         ...state,
//         data: [
//           ...state.data,
//           newRow
//         ],
//         new: {
//           id: 0,
//           name: '',
//           role: 0,
//           active: true
//         }
//       };
//     case types.TABLE_ROW_DELETE_SUCCESS:
//       return {
//         ...state,
//         data: filterByNotId(state.data, action.id)
//       };
//     case types.TABLE_ROW_EDIT_TOGGLE:
//       return {
//         ...state,
//         editing: + action.id
//       };
//     case types.TABLE_CELL_UPDATE:
//       return {
//         ...state,
//         data: [
//           ...filterByNotId(state.data, action.id),
//           ...filterById(state.data, action.id) /////TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//         ]
//       };
//     case types.TABLE_CELL_TOGGLE://///TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//       return {
//         ...state,
//         data: {
//           ...state.data,
//           [action.key]: action.value
//         }
//       };
//     default:
//       return state;
//   }
// }
//
// export default adminPermissions;
