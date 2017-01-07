import * as types from "./actionTypes";

export const tableRowAdd = () => (
    {type: types.TABLE_ROW_ADD}
);

export const tableRowDelete = (id) => (
    {type: types.TABLE_ROW_DELETE, id}
);

export const tableCellUpdate = (key, value) => (
    {type: types.TABLE_CELL_UPDATE, key, value}
);
